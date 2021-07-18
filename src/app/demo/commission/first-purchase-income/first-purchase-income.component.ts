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
  public keys: any;
  public total: number;
  public incomeTypeItems:any;
  public statusItems:any;
  public title: string ="First Purchase Income";
  public incometype: boolean = true;
  public date: boolean = true;
  public status: boolean = true;
  public params: any;
  userData = JSON.parse(localStorage.getItem('userData'));
  constructor(private comission: ComissionService) { 
    this.defaultPage = 1;
  }

  ngOnInit(): void {
    this.params = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token,
      starte_date:'',
      end_date:'',
      income_type:'',
      status:'',
      page: 1
    }
   
    this.loadData();
    
    this.comission.getIncomeType('firstpurchase').subscribe((data) => {
      this.incomeTypeItems = data;
    });
    this.comission.getStatus('firstpurchase').subscribe((data) => {
      this.statusItems = data;
    });
    
  }
  loadData(){
    this.comission.getFirstPurchaseIncomeItems(this.params,'income_first_purchase.php').subscribe((data:any) => {
      this.items = data.result;
      this.keys = Object.keys(data.result[0]);
      this.columns =  Object.keys(data.result[0]);
      this.total = data.total_count;
    });
  }
  onPageChange(e){
    this.defaultPage = e;
    this.params.page = e;
    this.loadData();
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
    this.params.starte_date = '';
    this.params.end_date = '';
    this.params.income_type = '';
    this.params.status = '';
    this.loadData();
  }
}
