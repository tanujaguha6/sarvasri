import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from '../../../theme/shared/components/modal/ui-modal/ui-modal.component';
import { GraphService } from '../../../core/services/graph.service';
import { Router } from '@angular/router';


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
  constructor(private auth:GraphService, private router: Router) { }

  ngOnInit(): void {
    this.binaryTreeGraph();
  }
  fetchdata(id: string){
    this.id = id;
    this.auth.getData(this.id).subscribe((modal) => {
      this.modalData = modal['result'][0];
    });
    this.uimoadal.show();
  }

  binaryTreeGraph(treeObject=null){
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
    this.auth.binaryTree(user).subscribe((res) => {
      this.binarytree = res['result'];
      if(this.binarytree.length===1){
        this.router.navigateByUrl('/member/member-add', { state: treeObject });
        //this.router.navigate(['/member/member-add'])
      }
      this.binarytree.map(each=>{
        this.treeData[each.position-1] = [each.name,each.mem_code,each.profile_image,each.border_colour,each.border_type];
      })
    });
  }
}
