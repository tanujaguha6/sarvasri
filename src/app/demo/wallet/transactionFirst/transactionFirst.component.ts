import { Component, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';
@Component({
  selector: 'app-transaction-first',
  templateUrl: './transactionFirst.component.html',
  styleUrls: ['./transactionFirst.component.scss']
})
export class TransactionFirstComponent implements OnInit {

  public defaultPage: number;
  public items:any;
  public columns: any;
  public total: number;
  public type: string;
  public keys: any;
  public params: any;
  public api: string;
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
        start_date:'',
        end_date:'',
        income_type:'',
        status:'',
        page: 1
      }
      this.api = 'wallet_transaction_first.php';
      this.loadData();
  }
  loadData(){
    this.comission.getFirstPurchaseIncomeItems(this.params, this.api).subscribe((data:any) => {
      this.items = data.result;
      if(this.items.length){
        this.keys = Object.keys(data.result[0]);
        this.columns =  Object.keys(data.result[0]);
      }
      this.total = data.total_count;
      this.perpage = data.per_page;
    });
  }
  onPageChange(e){
    this.defaultPage = e;
    this.params.page = e;
    this.loadData();
  }
  

}
