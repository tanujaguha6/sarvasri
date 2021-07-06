import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from '../../../theme/shared/components/modal/ui-modal/ui-modal.component';


@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.scss']
})
export class BinaryTreeComponent implements OnInit {
  @ViewChild(UiModalComponent) uimoadal : UiModalComponent;
  public id : string;
  constructor() { }

  ngOnInit(): void {
  }
  fetchdata(id){
    this.id = id;
    this.uimoadal.show();
  }

}
