import { Component, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

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
  public sides:any;
  constructor(private comission: ComissionService) { 
    this.defaultPage = 1;
  }

  ngOnInit(): void {
    // this.comission.getFirstPurchaseIncomeItems(1).subscribe((data) => {
    //   this.items = data;
    // });
    this.comission.getColums('productview').subscribe((data) => {
      this.columns = data;
    });
    this.comission.getTotalItems('productview').subscribe((data) => {
      this.total  = data;
    });
    this.comission.getSides('productview').subscribe((data) => {
      this.sides  = data;
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
