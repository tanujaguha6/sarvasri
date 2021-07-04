import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tbl-basic',
  templateUrl: './tbl-basic.component.html',
  styleUrls: ['./tbl-basic.component.scss']
})
export class TblBasicComponent implements OnInit {
  public defaultPage: number;
  public itemsPerPage:number;
  public items:any;
  constructor() { }

  ngOnInit() {
    this.defaultPage = 1;
    this.itemsPerPage=2;
    this.items = [{
      id :3,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    },
    {
      id :3,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    },
    {
      id :3,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    },
    {
      id :3,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    },
    {
      id :3,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    },
    {
      id :3,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    },
    {
      id :3,
      name: 'Lary',
      surname: 'The Bird',
      social: '@twitter'
    }]
  }

}
