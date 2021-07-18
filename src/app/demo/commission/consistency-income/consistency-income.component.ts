import { Component, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-consistency-income',
  templateUrl: './consistency-income.component.html',
  styleUrls: ['./consistency-income.component.scss']
})
export class ConsistencyIncomeComponent implements OnInit {

  public defaultPage: number;
  public showModals: boolean;
  public items:any;
  public columns: any;
  public total: number;
  public incomeTypeItems:any;
  public title: string ="Consistency Income";
  public incometype: boolean = true;
  public date: boolean = true;
  public perpage: number = 50;
  constructor(private comission: ComissionService) { 
    this.defaultPage = 1;
  }

  ngOnInit(): void {
    // this.comission.getFirstPurchaseIncomeItems(1).subscribe((data) => {
    //   this.items = data;
    // });
    this.comission.getColums('consistencyincome').subscribe((data) => {
      this.columns = data;
    });
    this.comission.getTotalItems('consistencyincome').subscribe((data) => {
      this.total  = data;
    });
    this.comission.getIncomeType('consistencyincome').subscribe((data) => {
      this.incomeTypeItems = data;
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
    //this.modalService.open(this.modalDefault);
  }
  hideModals(e){
    this.showModals =  false;
  }


}
