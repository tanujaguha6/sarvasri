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
  public total: number;
  public title: string ="Recognition View";
  public date: boolean = true;
  public perpage: number;
  public params: any;
  public keys: any;
  userData = JSON.parse(localStorage.getItem('userData'));
  constructor(private comission: ComissionService,private auth:GraphService) { 
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
    this.comission.getFirstPurchaseIncomeItems(this.params,'rank_member.php', true).subscribe((data:any) => {
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
  
  ngOnDestroy(){
    localStorage.removeItem('searchFilter')
  }
}
