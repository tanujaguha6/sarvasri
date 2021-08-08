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
  public perpage: number;
  public params: any;
  public keys: any;
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
      page: 1
    }
    this.loadData();
    
  }
  loadData(){
    this.comission.getFirstPurchaseIncomeItems(this.params,'payout_report.php').subscribe((data:any) => {
      this.items = data.result;
      if(this.items.length){
        this.keys = Object.keys(data.result[0]);
        this.columns =  Object.keys(data.result[0]);
      }
      this.total = data.total_count;
      this.perpage = data.per_page;
    });
  }
  
  getSearchData(event){
    this.params.start_date = event.date.split('/')[0];
    this.params.end_date = event.date.split('/')[1];
    this.loadData();
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

}
