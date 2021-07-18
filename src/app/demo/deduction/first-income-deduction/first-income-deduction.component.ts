import { Component, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-first-income-deduction',
  templateUrl: './first-income-deduction.component.html',
  styleUrls: ['./first-income-deduction.component.scss']
})
export class FirstIncomeDeductionComponent implements OnInit {

  public defaultPage: number;
  public showModals: boolean;
  public items:any;
  public columns: any;
  public total: number;
  public title: string ="First Income Deduction";
  public date: boolean = true;
  public keys: any;
  public params: any;
  public perpage: number;
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
      page: 1
    }
    this.loadData();
  }

  loadData(){
    this.comission.getFirstPurchaseIncomeItems(this.params,'deduction_first_purchase_income.php').subscribe((data: any) => {
      if(data.result && data.result.length){
        this.items = data.result;
        this.keys = Object.keys(data.result[0]);
        this.columns =  Object.keys(data.result[0]);
        this.total = data.total_count;
        this.perpage = data.per_page;
      }
    });
  }
  onPageChange(e){
    this.defaultPage = e;
    this.params.page = e
    this.loadData();
  }
  showModal(){
    this.showModals = true;
  }
  hideModals(e){
    this.showModals =  false;
  }
  getSearchData(event){
    console.log(event);
    this.params.starte_date = '';
    this.params.end_date = '';
    this.loadData();
  }

}
