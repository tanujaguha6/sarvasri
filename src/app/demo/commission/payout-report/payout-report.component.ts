import { Component, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-payout-report',
  templateUrl: './payout-report.component.html',
  styleUrls: ['./payout-report.component.scss']
})
export class PayoutReportComponent implements OnInit {

  public defaultPage: number;
  public showModals: boolean;
  public items:any;
  public columns: any;
  public total: number;
  public title: string ="Payout Report";
  public date: boolean = true;
  public perpage: number = 50;
  constructor(private comission: ComissionService) { 
    this.defaultPage = 1;
  }

  ngOnInit(): void {
    // this.comission.getFirstPurchaseIncomeItems(1).subscribe((data) => {
    //   this.items = data;
    // });
    this.comission.getColums('payoutreport').subscribe((data) => {
      this.columns = data;
    });
    this.comission.getTotalItems('payoutreport').subscribe((data) => {
      this.total  = data;
    });
    
  }
  onPageChange(e){
    this.defaultPage = e;
    // this.comission.getFirstPurchaseIncomeItems(e).subscribe((data) => {
    //   this.items = data;
    // });
  }
  showModal(){
    this.showModals = true;
  }
  hideModals(e){
    this.showModals =  false;
  }

}
