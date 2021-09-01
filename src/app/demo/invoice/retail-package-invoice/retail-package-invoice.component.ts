import { Component, OnInit } from '@angular/core';
import { ComissionService } from '../../../core/services/comission.service';

@Component({
  selector: 'app-retail-package-invoice',
  templateUrl: './retail-package-invoice.component.html',
  styleUrls: ['./retail-package-invoice.component.scss']
})
export class RetailPackageInvoiceComponent implements OnInit {

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
  public perpage: number;
  public params: any;
  public keys: any;
  public grand_total_income: number;
  public page_total_income: number;
  public grand_total_bv: number;
  public page_total_bv: number;
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
      invoice_no :'',
      amount:'',
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
    this.comission.getFirstPurchaseIncomeItems(this.params,'invoice_package_retail.php').subscribe((data:any) => {
      this.items = data.result;
      if(this.items.length){
        this.keys = Object.keys(data.result[0]);
        this.columns =  Object.keys(data.result[0]);
      }
      this.total = data.total_count;
      this.perpage = data.per_page;
      this.page_total_income = data.page_total_amount;
      this.grand_total_income = data.grand_total_amount;
      this.page_total_bv = data.page_total_bv;
      this.grand_total_bv = data.grand_total_bv;
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
