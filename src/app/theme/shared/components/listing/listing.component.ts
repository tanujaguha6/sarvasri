import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../../../core/services/loader-service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @Input() items: any;
  @Input() columns: any;
  @Input() keys: any;
  isLoading : any;
  public column_list: any;
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    console.log('coming',this.isLoading);
    this.loaderService.isLoading.subscribe(res=>{
      this.isLoading = res;
    })
    this.loaderService.show();
    //this.column_list = this.columns;
    //console.log(this.column_list)
    // this.column_list = this.column_list.map(col=>{
    //   col.replace(/_/g, " ");
    //   return col;
    // })
  }

}
