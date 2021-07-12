import { Component, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-re-purchase-monthly-income',
  templateUrl: './re-purchase-monthly-income.component.html',
  styleUrls: ['./re-purchase-monthly-income.component.scss']
})
export class RePurchaseMonthlyIncomeComponent implements OnInit {

  public defaultPage: number;
  public showModals: boolean;
  public items:any;
  public columns: any;
  public total: number;
  public incomeTypeItems:any;
  public statusItems:any;
  public title: string ="Re Purchase Monthly Income";
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
    this.comission.getColums('repurchasemonthly').subscribe((data) => {
      this.columns = data;
    });
    this.comission.getTotalItems('repurchasemonthly').subscribe((data) => {
      this.total  = data;
    });
    this.comission.getIncomeType('repurchasemonthly').subscribe((data) => {
      this.incomeTypeItems = data;
    });
    this.comission.getStatus('repurchasemonthly').subscribe((data) => {
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
  }
  hideModals(e){
    this.showModals =  false;
  }

}
