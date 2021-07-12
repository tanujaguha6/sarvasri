import { Component, Input, OnInit, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { UiModalComponent } from '../../theme/shared/components/modal/ui-modal/ui-modal.component';
import {ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit  {
  @ViewChild(UiModalComponent) uimoadal : UiModalComponent;
  @Input() incometype: any;
  @Input() date: any;
  @Input() status: any;
  @Input() title: any;
  @Input() member: any;
  @Input() upliner: any;
  @Input() introducer: any;
  @Input() side: any;
  @Input() invoiceno: any;
  @Input() amount: any;
  @Input() productcode: any;
  @Input() statusItems: any;
  @Input() incomeTypeItems: any;
  @Input() sidesItem:any;
  @Output() closeModal = new EventEmitter();
  @Output() sendSearchData = new EventEmitter();

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(){}

  ngAfterViewInit(){
      this.uimoadal.show();
      this.cdref.detectChanges();
  }
  
  closeModals(){
    this.closeModal.emit('false');
  }
  search(){
    this.sendSearchData.emit("here send the form builder value");
    this.closeModals();
  }
  
}
