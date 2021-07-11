import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from '../../../theme/shared/components/modal/ui-modal/ui-modal.component';
import { GraphService } from '../../../core/services/graph.service';


@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.scss']
})
export class BinaryTreeComponent implements OnInit {
  @ViewChild(UiModalComponent) uimoadal : UiModalComponent;
  public id : string;
  binarytree:any;
  constructor(private auth:GraphService) { }

  ngOnInit(): void {
    this.binaryTreeGraph();
  }
  fetchdata(id){
    this.id = id;
    this.uimoadal.show();
  }

  binaryTreeGraph(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    const user = {
      username: userData.username,
      login_type: userData.login_type,
      auth_token: userData.auth_token,
      mem_code :   userData.username
    };
    this.auth.binaryTree(user).subscribe((res) => {
      this.binarytree = res['result'];
      console.log(this.binarytree);
      
    });
  }

}
