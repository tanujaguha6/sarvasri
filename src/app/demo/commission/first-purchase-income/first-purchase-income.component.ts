import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-first-purchase-income',
  templateUrl: './first-purchase-income.component.html',
  styleUrls: ['./first-purchase-income.component.scss']
})
export class FirstPurchaseIncomeComponent implements OnInit {
  public defaultPage: number;
  public showModals: boolean;
  public items:any;
  public columns: any;
  public total: number;
  public incomeTypeItems:any;
  public statusItems:any;
  public title: string ="First Purchase Income";
  public incometype: boolean = true;
  public date: boolean = true;
  public status: boolean = true;
  constructor(private comission: ComissionService) { 
    this.defaultPage = 1;
  }

  ngOnInit(): void {
    this.comission.getFirstPurchaseIncomeItems(1).subscribe((data) => {
      this.items = data;
    });
    this.comission.getColums('firstpurchase').subscribe((data) => {
      this.columns = data;
    });
    this.comission.getTotalItems('firstpurchase').subscribe((data) => {
      this.total  = data;
    });
    this.comission.getIncomeType('firstpurchase').subscribe((data) => {
      this.incomeTypeItems = data;
    });
    this.comission.getStatus('firstpurchase').subscribe((data) => {
      this.statusItems = data;
    });
    
  }
  onPageChange(e){
    this.defaultPage = e;
    this.comission.getFirstPurchaseIncomeItems(e).subscribe((data) => {
      this.items = data;
    });
  }
  showModal(){
    this.showModals = true;
    //this.modalService.open(this.modalDefault);
  }
  hideModals(e){
    this.showModals =  false;
  }
  getSearchData(event){
    console.log(event);
    this.comission.getFirstPurchaseIncomeItems(1).subscribe((data) => {
      this.items = data;
    });
  }
}
