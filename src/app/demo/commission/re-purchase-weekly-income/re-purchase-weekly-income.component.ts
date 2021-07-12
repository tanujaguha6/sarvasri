import { Component, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-re-purchase-weekly-income',
  templateUrl: './re-purchase-weekly-income.component.html',
  styleUrls: ['./re-purchase-weekly-income.component.scss']
})
export class RePurchaseWeeklyIncomeComponent implements OnInit {

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
    this.comission.getColums('repurchaseweekly').subscribe((data) => {
      this.columns = data;
    });
    this.comission.getTotalItems('repurchaseweekly').subscribe((data) => {
      this.total  = data;
    });
    this.comission.getIncomeType('repurchaseweekly').subscribe((data) => {
      this.incomeTypeItems = data;
    });
    this.comission.getStatus('repurchaseweekly').subscribe((data) => {
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
