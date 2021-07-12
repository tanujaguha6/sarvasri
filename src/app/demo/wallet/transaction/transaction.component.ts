import { Component, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  public defaultPage: number;
  public items:any;
  public columns: any;
  public total: number;
  
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
  

}
