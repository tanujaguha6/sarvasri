import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { UiModalComponent } from '../../../theme/shared/components/modal/ui-modal/ui-modal.component';
@Component({
  selector: 'app-first-purchase-income',
  templateUrl: './first-purchase-income.component.html',
  styleUrls: ['./first-purchase-income.component.scss']
})
export class FirstPurchaseIncomeComponent implements OnInit {
  public defaultPage: number;
  public itemsPerPage:number;
  public items:any;
  @ViewChild(UiModalComponent) uimoadal : UiModalComponent;
 
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.defaultPage = 1;
    this.itemsPerPage=2;
    this.items = [{
      id :1,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    },
    {
      id :2,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    },
    {
      id :3,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    },
    {
      id :4,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    },
    {
      id :5,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    },
    {
      id :6,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    },
    {
      id :7,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    }]
  }
  
  showModal(){
    //this.modalService.open(this.modalDefault);
    this.uimoadal.show();
  }
}
