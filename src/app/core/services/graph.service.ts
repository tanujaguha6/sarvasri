import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  userData = JSON.parse(localStorage.getItem('userData'));
  
  constructor(private http: HttpClient) { }

  binaryTree(user:any) {
    return this.http.post("https://myshpl.com/api/binary_tree.php", user)
  }
  getData(mem_code:any) {
    let user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token,
      mem_code: mem_code
    };
    return this.http.post("https://myshpl.com/api/binary_tree_tooltip.php", user)
  }
}
