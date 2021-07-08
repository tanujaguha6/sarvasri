import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private http: HttpClient) { }

  login(userData: any) {
    return this.http.post("https://myshpl.com/api/login.php", userData)
  }

  logout() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    const user = {
      username: userData.username,
      login_type: userData.login_type,
      auth_token: userData.auth_token
    };
    return this.http.post("https://myshpl.com/api/logout.php", user)
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
