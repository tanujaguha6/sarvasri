import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ComissionService {

  constructor(private http: HttpClient) { }
  getFirstPurchaseIncomeItems(params,api){
   // let items = [];
  //   if(page == 1){
  //    items = [{
  //     id :1,
  //     name: 'Lary',
  //     surname: 'The Bird',
  //     social: '@twitter'
  //   },
  //   {
  //     id :2,
  //     name: 'Lary',
  //     surname: 'The Bird',
  //     social: '@twitter'
  //   },
  //   {
  //     id :3,
  //     name: 'Lary',
  //     surname: 'The Bird',
  //     social: '@twitter'
  //   },
  //   {
  //     id :4,
  //     name: 'Lary',
  //     surname: 'The Bird',
  //     social: '@twitter'
  //   },
  //   {
  //     id :5,
  //     name: 'Lary',
  //     surname: 'The Bird',
  //     social: '@twitter'
  //   },
  //   {
  //     id :6,
  //     name: 'Lary',
  //     surname: 'The Bird',
  //     social: '@twitter'
  //   },
  //   {
  //     id :7,
  //     name: 'Lary',
  //     surname: 'The Bird',
  //     social: '@twitter'
  //   }]
  // }
  // else{
  //    items = [{
  //     id :1,
  //     name: 'Lary2',
  //     surname: 'The Bird',
  //     social: '@twitter'
  //   },
  //   {
  //     id :2,
  //     name: 'Lary3',
  //     surname: 'The Bird',
  //     social: '@twitter'
  //   },
  //   {
  //     id :2,
  //     name: 'Lary3',
  //     surname: 'The Bird',
  //     social: '@twitter'
  //   },
  //   {
  //     id :2,
  //     name: 'Lary3',
  //     surname: 'The Bird',
  //     social: '@twitter'
  //   },
  //   {
  //     id :2,
  //     name: 'Lary3',
  //     surname: 'The Bird',
  //     social: '@twitter'
  //   }]
  // }
    //return Observable.of(items);
    return this.http.post("https://myshpl.com/api/member/"+api, params)
    
  }
  getColums(type){
    let columns = ['First Name','Last Name','Username'];
    return Observable.of(columns);
  }
  getTotalItems(type){
    return Observable.of(50);
  }
  getIncomeType(type){
    let incomeType = [{
      name : 'FIRST PURCHASE BINARY',
      value: 'FIRST_PURCHASE_BINARY'
    },{
      name : 'DAILY SPONSOR BP BINARY',
      value: 'DAILY_SPONSOR_BP_BINARY'
    },{
      name : 'FLASHOUT INCOME',
      value: 'FLASHOUT_INCOME'
    }]
    return Observable.of(incomeType);
  }
  getStatus(type){
    let status = [{
      name : 'All',
      value: ''
    },{
      name : 'Calculated',
      value: 0
    },{
      name : 'Distributed',
      value: 1
    }]
    return Observable.of(status);
  }
  getSides(type){
    let status = [{
      name : 'All',
      value: ''
    },{
      name : 'LEFT',
      value: 'L'
    },{
      name : 'RIGHT',
      value: 'R'
    }]
    return Observable.of(status);
  }
}
