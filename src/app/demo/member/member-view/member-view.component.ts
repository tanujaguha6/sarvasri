import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.scss']
})
export class MemberViewComponent implements OnInit, OnDestroy {

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
  public sides:any;
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
      mem_code :'',
      upliner_code :'',
      intro_code :'',
      upliner_side : '',
      page: 1
    }
    this.loadData();
    this.sides  = [{
      name:'ALL',
      value:''
    },{
      name:'LEFT',
      value:'LEFT'
    },{
      name:'RIGHT',
      value:'RIGHT'
    }]
   
    
  }
  loadData(){
    this.comission.getFirstPurchaseIncomeItems(this.params,'member_view.php').subscribe((data:any) => {
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
    this.params.mem_code = event.mem_code;
    this.params.upliner_code = event.upliner_code;
    this.params.intro_code = event.intro_code;
    this.params.upliner_side = event.upliner_side;
    this.params.invoice_no = event.invoice_no;
    this.params.amount = event.amount;
    this.total=0;
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
  ngOnDestroy(){
    localStorage.removeItem('searchFilter')
  }
}
