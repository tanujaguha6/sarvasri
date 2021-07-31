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
    let incomeType = [];
    switch(type){
      case('firstpurchase'):{
        incomeType = [{
          name : 'FIRST PURCHASE BINARY',
          value: 'FIRST_PURCHASE_BINARY'
        },{
          name : 'DAILY SPONSOR BP BINARY',
          value: 'DAILY_SPONSOR_BP_BINARY'
        },{
          name : 'FLASHOUT INCOME',
          value: 'FLASHOUT_INCOME'
        }]
        break;
      }
      case('repurchaseweekly'):{
        incomeType = [{
          name : 'TEAM BONUS',
          value: 'TEAM_BONUS'
        },{
          name : 'TEAM BUILDING BONUS',
          value: 'TEAM_BUILDING_BONUS'
        }]
        break;
      }
      case('repurchasemonthly'):{
        incomeType = [{
          name : 'COMPANYS BV',
          value: 'COMPANYS_BV'
        },{
          name : 'BUSINESS DEVELOPMENT FUND',
          value: 'BUSINESS_DEVELOPMENT_FUND'
        },{
          name : 'CHILD EDUCATION FUND',
          value: 'CHILD_EDUCATION_FUND'
        },{
          name : 'TRAVEL FUN',
          value: 'TRAVEL_FUN'
        },{
          name : 'CAR FUND',
          value: 'CAR_FUND'
        },{
          name : 'HOUSE FUND',
          value: 'HOUSE_FUND'
        },{
          name : 'TEAM CONSULTANCY BONUS',
          value: 'TEAM_CONSULTANCY_BONUS'
        },{
          name : 'ROYALTY CLUB BONUS',
          value: 'ROYALTY_CLUB_BONUS'
        }]
        break;
      }
      case('consistencyincome'):{
        incomeType = [{
          name : 'TYPE 1',
          value: 'TYPE_1'
        },{
          name : 'TYPE 2',
          value: 'TYPE_2'
        },{
          name : 'TYPE 3',
          value: 'TYPE_3'
        }]
        break;
      }
      case('firstinvoice'):{
        incomeType = [{
          name : 'FIRST PURCHASE BINARY',
          value: 'FIRST_PURCHASE_BINARY'
        },{
          name : 'DAILY SPONSOR BP BINARY',
          value: 'DAILY_SPONSOR_BP_BINARY'
        },{
          name : 'FLASHOUT INCOME',
          value: 'FLASHOUT_INCOME'
        }]
        break;
      }
      case('directdownline'):{
        incomeType = [{
          name : 'FIRST PURCHASE BINARY',
          value: 'FIRST_PURCHASE_BINARY'
        },{
          name : 'DAILY SPONSOR BP BINARY',
          value: 'DAILY_SPONSOR_BP_BINARY'
        },{
          name : 'FLASHOUT INCOME',
          value: 'FLASHOUT_INCOME'
        }]
        break;
      }
      case('memberview'):{
        incomeType = [{
          name : 'FIRST PURCHASE BINARY',
          value: 'FIRST_PURCHASE_BINARY'
        },{
          name : 'DAILY SPONSOR BP BINARY',
          value: 'DAILY_SPONSOR_BP_BINARY'
        },{
          name : 'FLASHOUT INCOME',
          value: 'FLASHOUT_INCOME'
        }]
        break;
      }
      case('firstincomededuction'):{
        incomeType = [{
          name : 'FIRST PURCHASE BINARY',
          value: 'FIRST_PURCHASE_BINARY'
        },{
          name : 'DAILY SPONSOR BP BINARY',
          value: 'DAILY_SPONSOR_BP_BINARY'
        },{
          name : 'FLASHOUT INCOME',
          value: 'FLASHOUT_INCOME'
        }]
        break;
      }
      case('firstincomededuction'):{
        incomeType = [{
          name : 'FIRST PURCHASE BINARY',
          value: 'FIRST_PURCHASE_BINARY'
        },{
          name : 'DAILY SPONSOR BP BINARY',
          value: 'DAILY_SPONSOR_BP_BINARY'
        },{
          name : 'FLASHOUT INCOME',
          value: 'FLASHOUT_INCOME'
        }]
        break;
      }
    }
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
