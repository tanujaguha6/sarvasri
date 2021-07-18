import { Component, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  public defaultPage: number;
  public items:any;
  public columns: any;
  public total: number;
  public perpage: number = 50;
  
  constructor(private comission: ComissionService) { 
    this.defaultPage = 1;
  }

  ngOnInit(): void {
    // this.comission.getFirstPurchaseIncomeItems(1).subscribe((data) => {
    //   this.items = data;
    // });
    this.comission.getColums('firstincomededuction').subscribe((data) => {
      this.columns = data;
    });
    this.comission.getTotalItems('firstincomededuction').subscribe((data) => {
      this.total  = data;
    });
    
    
  }
  onPageChange(e){
    this.defaultPage = e;
    // this.comission.getFirstPurchaseIncomeItems(e).subscribe((data) => {
    //   this.items = data;
    // });
  }
  

}
