import { Component, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';
import { GraphDataService } from '../../../core/services/graph-data.service';

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
  public dropdownData: any;
  userData = JSON.parse(localStorage.getItem('userData'));
  constructor(private comission: ComissionService, private graph: GraphDataService) { 
    this.defaultPage = 1;
  }

  ngOnInit(): void {
    this.params = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token,
      income_date:'',
      page: 1
    }
    this.loadData();
    this.getDropdown();
  }
  loadData(){
    this.comission.getFirstPurchaseIncomeItems(this.params,'payout_report.php').subscribe((data:any) => {
      this.items = data.result[0];
    });
    
  }
  getDropdown(){
    this.graph.graphDropdown(this.userData).subscribe(res => {
      this.dropdownData = res['result'];
    })
  }
  getSearchData(event){
    this.params.income_date = event.date_custom;
    this.total = 0;
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
