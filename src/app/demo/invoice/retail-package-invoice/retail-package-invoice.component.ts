import { Component, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-retail-package-invoice',
  templateUrl: './retail-package-invoice.component.html',
  styleUrls: ['./retail-package-invoice.component.scss']
})
export class RetailPackageInvoiceComponent implements OnInit {

  public defaultPage: number;
  public showModals: boolean;
  public items:any;
  public columns: any;
  public total: number;
  public title: string ="First Income Deduction";
  public date: boolean = true;
  public member:boolean = true;
  public upliner: boolean = true;
  public introducer: boolean = true;
  public side: boolean = true;
  public invoiceno: boolean = true;
  public amount: boolean = true;
  public productcode:boolean = true;
  constructor(private comission: ComissionService) { 
    this.defaultPage = 1;
  }

  ngOnInit(): void {
    this.comission.getFirstPurchaseIncomeItems(1).subscribe((data) => {
      this.items = data;
    });
    this.comission.getColums('firstincomededuction').subscribe((data) => {
      this.columns = data;
    });
    this.comission.getTotalItems('firstincomededuction').subscribe((data) => {
      this.total  = data;
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
