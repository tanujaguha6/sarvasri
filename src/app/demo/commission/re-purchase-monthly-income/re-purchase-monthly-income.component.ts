import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-re-purchase-monthly-income',
  templateUrl: './re-purchase-monthly-income.component.html',
  styleUrls: ['./re-purchase-monthly-income.component.scss']
})
export class RePurchaseMonthlyIncomeComponent implements OnInit, OnDestroy {

  public defaultPage: number;
  public showModals: boolean;
  public items:any;
  public columns: any;
  public keys: any;
  public total: number;
  public incomeTypeItems:any;
  public statusItems:any;
  public title: string ="Re Purchase Monthly Income";
  public incometype: boolean = true;
  public date: boolean = true;
  public status: boolean = true;
  public params: any;
  public perpage:number=50;
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
    
    this.comission.getIncomeType('repurchasemonthly').subscribe((data) => {
      this.incomeTypeItems = data;
    });
    this.comission.getStatus('repurchasemonthly').subscribe((data) => {
      this.statusItems = data;
    });
    
  }
  loadData(){
    this.comission.getFirstPurchaseIncomeItems(this.params,'income_repurchase_monthly.php').subscribe((data:any) => {
      this.items = data.result;
      if(this.items.length){
        this.keys = Object.keys(data.result[0]);
        this.columns =  Object.keys(data.result[0]);
      }
      console.log(data.total_count)
      this.total = data.total_count;
      this.perpage = data.per_page;
    });
  }
  onPageChange(e){
    this.defaultPage = e;
    this.params.page = e;
    this.loadData();
  }
  showModal(){
    this.showModals = true;
  }
  hideModals(e){
    this.showModals =  false;
  }
  getSearchData(event){
    this.params.starte_date = event.date.split('/')[0];
    this.params.end_date = event.date.split('/')[1];
    this.params.income_type = event.income_type;
    this.params.status = event.status;
    this.loadData();
  }
  ngOnDestroy(){
    localStorage.removeItem('searchFilter')
  }
}
