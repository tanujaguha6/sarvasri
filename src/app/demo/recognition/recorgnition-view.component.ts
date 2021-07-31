import { Component, OnInit } from '@angular/core';
import { ComissionService } from 'src/app/core/services/comission.service';
import { GraphService } from 'src/app/core/services/graph.service';

@Component({
  selector: 'app-recorgnition-view',
  templateUrl: './recorgnition-view.component.html',
  styleUrls: ['./recorgnition-view.component.scss']
})
export class RecorgnitionViewComponent implements OnInit {

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
    this.userRecognizationView();
    // this.comission.getFirstPurchaseIncomeItems(1).subscribe((data) => {
    //   this.items = data;
    // });
    this.comission.getColums('directdownline').subscribe((data) => {
      this.columns = data;
    });
    this.comission.getTotalItems('directdownline').subscribe((data) => {
      this.total  = data;
    });
    this.comission.getSides('directdownline').subscribe((data) => {
      this.sides  = data;
    });
    
  }

  userRecognizationView(){
   
    this.auth.recognizationView(this.params).subscribe((res:any) => {
      this.items = res.result;
      console.log(this.items);
      
      if(this.items.length){
        this.keys = Object.keys(res.result[0]);
        this.columns =  Object.keys(res.result[0]);
      }
      console.log(this.columns);
      
      // this.total = res.total_count;
      // this.perpage = res.per_page;
    });
  }

  onPageChange(e){
    this.defaultPage = e;
    this.params.page = e;
    this.userRecognizationView();
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
    console.log(event);
    
    this.params.start_date = event.date.split('/')[0];
    this.params.end_date = event.date.split('/')[1];
    this.params.mobile = event.mobile;
    this.params.amount = event.amount;
    this.params.intro_code = event.intro_code;
    this.params.invoice_no = event.invoice_no;
    this.params.mem_code = event.mem_code;
    this.params.upliner_code = event.upliner_code;
    this.params.upliner_side = event.upliner_side;
    this.userRecognizationView();
  }
  ngOnDestroy(){
    localStorage.removeItem('searchFilter')
  }
}
