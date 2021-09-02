import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { tap } from 'rxjs/operators';
import {  
  CookieService  
} from 'ngx-cookie-service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  isLoggedIn: boolean = false;
  httpOptions = null;
  rememberMe: boolean = false;

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(public router: Router, private http: HttpClient,  private cookieService: CookieService) {
    this.rememberMe =this.cookieService.get('rememberCurrentUser') == 'true' ? true : false;

    if ((this.rememberMe = true)) {
      this.currentUserSubject = new BehaviorSubject<any>(
        JSON.parse(localStorage.getItem('currentUser'))
      );
    } else {
      this.currentUserSubject = new BehaviorSubject<any>(
        JSON.parse(sessionStorage.getItem('currentUser'))
      );
    }

    this.currentUser = this.currentUserSubject.asObservable();

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

   }
   public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  resetcredentials() {
    //clear all localstorages
    localStorage.removeItem('rememberCurrentUser');
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  login(userData: any) {
    return this.http
      .post<any>('https://myshpl.com/api/login.php',userData)
      .pipe(
        tap(user => {
          console.log(user)
          if (user && user.auth_token) {
            if (userData.rememberMe) {
              this.resetcredentials();
              //your logged  out when you click logout
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.cookieService.set('rememberCurrentUser', 'true');
              this.cookieService.set('username', userData.username);  
              this.cookieService.set('password', userData.password);  
            } else {
              //your logged  out when page/ browser is closed
              sessionStorage.setItem('currentUser', JSON.stringify(user));
            }
            // login successful if there's a jwt token in the response
            this.isLoggedIn = true;
            this.currentUserSubject.next(user);
            return true;
          } else {
            return false;
          }
        })
      );
    // return this.http.post("https://myshpl.com/api/login.php", userData)
  }

  logout() {
    // this.resetcredentials();
    let userData = JSON.parse(localStorage.getItem('userData'));
    if(userData){
    const user = {
      username: userData.username,
      login_type: userData.login_type,
      auth_token: userData.auth_token
    };
    return this.http.post("https://myshpl.com/api/logout.php", user)
    }
    return Observable.of([]);
  }

  memberIncomeApi(memberIncome: any) {
    return this.http.post("https://myshpl.com/api/member_income_summery.php", memberIncome)
  }
  memberWalletApi(memberWallet: any) {
    return this.http.post("https://myshpl.com/api/member_wallet_summery.php", memberWallet)
  }
  directMemberApi(directMember: any) {
    return this.http.post("https://myshpl.com/api/direct_member.php", directMember)
  }
  rankMemberApi(rankMember: any) {
    return this.http.post("https://myshpl.com/api/rank_member.php", rankMember)
  }
 
  dashBoardMemberApi(memberData: any) {
    return this.http.post("https://myshpl.com/api/profile_member.php", memberData)
  }
  yearlyGraphApi(yearlyGraph: any) {
    return this.http.post("https://myshpl.com/api/graph_member_monthly_income.php", yearlyGraph)
  }
  monthlyGraphApi(monthlyGraph: any) {
    return this.http.post("https://myshpl.com/api/graph_member_first_purchase_income.php", monthlyGraph)
  }
  stateApi(state:any){
    return this.http.post("https://myshpl.com/api/get_state.php", state)
  }

  districtApi(district:any){
    return this.http.post("https://myshpl.com/api/get_district_by_state.php", district)
  }

  bankIfscCodeApi(ifsc:any){
    return this.http.post("https://myshpl.com/api/get_bank_by_ifsc.php", ifsc)
  }

  getIpAddress() {
    return this.http.get("http://api.ipify.org/?format=json");
  }

  fetchTodos() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getUniqueId(parts: number = 2): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }
}
