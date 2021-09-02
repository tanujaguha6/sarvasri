import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from '../../../theme/shared/components/modal/ui-modal/ui-modal.component';
import { GraphService } from '../../../core/services/graph.service';
import { Router } from '@angular/router';
import { LoaderService } from '../../../core/services/loader-service.service';


@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.scss']
})
export class BinaryTreeComponent implements OnInit {
  @ViewChild(UiModalComponent) uimoadal : UiModalComponent;
  public id : string;
  binarytree:any;
  treeData: any = [];
  modalData: any = [];
  isLoading : any;
  back_mem_code: any;
  title = "Enter Member Code";
  public showModals: boolean;
  constructor(private auth:GraphService, private router: Router, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.binaryTreeGraph();
    this.loaderService.isLoading.subscribe(res=>{
      this.isLoading = res;
    })
    this.loaderService.show();
  }
  fetchdata(id: string){
    let userData = JSON.parse(localStorage.getItem('userData'));
    const user = {
      username: userData.username,
      login_type: userData.login_type,
      auth_token: userData.auth_token,
      mem_code :   id
    };
    this.auth.getData(user).subscribe((modal) => {
      this.modalData = modal['result'][0];
    });
    this.uimoadal.show();
  }
  showModal(){
    this.showModals = true;
    //this.modalService.open(this.modalDefault);
  }
  hideModals(e){
    this.showModals =  false;
  }
  getSearchData(event){
    this.binaryTreeGraph(['',event.mem_code]);
  }

  binaryTreeGraph(treeObject=null,position=null){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let member_code = userData.username;
    this.treeData = [];
    if(treeObject && treeObject[1]){
      member_code = treeObject[1];
    }
    const user = {
      username: userData.username,
      login_type: userData.login_type,
      auth_token: userData.auth_token,
      mem_code :   member_code
    };
    if(position){
      this.router.navigate(['/member/member-add'], { queryParams: { sponser_code: member_code, position: position } });
    } else {
      this.auth.binaryTree(user).subscribe((res) => {
        this.binarytree = res['result'];
        this.back_mem_code = res['back_member_code'];
        if(this.binarytree.length===1){
          this.router.navigate(['/member/member-add'], { queryParams: { sponser_code: member_code } });
          //this.router.navigate(['/member/member-add'])
        }
        this.binarytree.map(each=>{
          this.treeData[each.position-1] = [each.name,each.mem_code,each.profile_image,each.border_colour,each.border_type];
        })
      });
    }
  }
  get_back(){
    this.binaryTreeGraph(['',this.back_mem_code]);
    this.back_mem_code = '';
  }
}
