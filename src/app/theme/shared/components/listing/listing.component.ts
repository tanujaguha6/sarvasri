import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../../../core/services/loader-service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, OnChanges {
  @Input() items: any;
  @Input() columns: any;
  @Input() keys: any;
  @Input() grand_total_income: any;
  @Input() page_total_income: any;
  @Input() grand_net_amount: any;
  @Input() grand_deduct_amount: any;
  @Input() grand_total_bv: any;
  @Input() page_total_bv: any;
  @Input() grand_total_bp: any;
  @Input() page_total_bp: any;
  isLoading : any;
  colspan : any;
  public column_list: any;
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe(res=>{
      this.isLoading = res;
    })
    this.loaderService.show();
  }
  ngOnChanges(){
    
    if(this.columns){
      this.colspan = this.columns.length - 1;
      if(this.grand_total_bv && this.page_total_bv){
        this.colspan = this.columns.length - 2;
      }
      if(this.grand_total_bp && this.page_total_bp){
        this.colspan = this.columns.length - 3;
      }
      if(this.grand_deduct_amount){
        this.colspan = this.columns.length - 3;
      }
    }
  }

}
