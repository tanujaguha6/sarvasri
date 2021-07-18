import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @Input() items: any;
  @Input() columns: any;
  @Input() keys: any;

  public column_list: any;
  constructor() { }

  ngOnInit(): void {
    //this.column_list = this.columns;
    //console.log(this.column_list)
    // this.column_list = this.column_list.map(col=>{
    //   col.replace(/_/g, " ");
    //   return col;
    // })
  }

}
