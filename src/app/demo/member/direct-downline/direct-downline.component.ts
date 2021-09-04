import { Component, OnDestroy, OnInit } from '@angular/core';
import { GraphService } from '../../../core/services/graph.service';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-direct-downline',
  templateUrl: './direct-downline.component.html',
  styleUrls: ['./direct-downline.component.scss']
})
export class DirectDownlineComponent implements OnInit,OnDestroy {

  public defaultPage: number;
  public showModals: boolean;
  public items:any;
  public columns: any;
  public keys: any;
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
  public perpage: number = 50;
  public params: any;
  constructor(private comission: ComissionService,private auth:GraphService) { 
    this.defaultPage = 1;
  }

  ngOnInit(): void {
    let userData = JSON.parse(localStorage.getItem('userData'));
    this.params = {
      username: userData.username,
      login_type: userData.login_type,
      auth_token: userData.auth_token,
      page: 1,
      start_date:'',
      end_date:'',
      mobile:'',
      amount:'',
      intro_code:'',
      invoice_no:'',
      mem_code:'',
      upliner_code:'',
      upliner_side:'',
    };
    this.memberDownLine();
    this.comission.getSides('directdownline').subscribe((data) => {
      this.sides  = data;
    });
    
  }

  memberDownLine(){
   
    this.auth.memberDirectDownline(this.params).subscribe((res:any) => {
      this.items = res.result;
      
      if(this.items.length){
        this.keys = Object.keys(res.result[0]);
        this.columns =  Object.keys(res.result[0]);
      }
      this.total = res.total_count;
      // this.perpage = res.per_page;
    });
  }

  onPageChange(e){
    this.defaultPage = e;
    this.params.page = e;
    this.memberDownLine();
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
  getSearchData(event){
    
    this.params.start_date = event.date.split('/')[0];
    this.params.end_date = event.date.split('/')[1];
    this.params.mobile = event.mobile;
    this.params.amount = event.amount;
    this.params.intro_code = event.intro_code;
    this.params.invoice_no = event.invoice_no;
    this.params.mem_code = event.mem_code;
    this.params.upliner_code = event.upliner_code;
    this.params.upliner_side = event.upliner_side;
    this.memberDownLine();
  }
  ngOnDestroy(){
    localStorage.removeItem('searchFilter')
  }

}
