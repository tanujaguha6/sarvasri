import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  
  constructor(private http: HttpClient) { }

  binaryTree(user:any) {
    return this.http.post("https://myshpl.com/api/binary_tree.php", user)
  }
  memberDirectDownline(user:any){
    return this.http.post("https://myshpl.com/api/member/member_direct.php", user)
  }
  recognizationView(user:any){
    return this.http.post("https://myshpl.com/api/rank_member.php", user)
  }
  
  getData(user:any) {
    return this.http.post("https://myshpl.com/api/binary_tree_tooltip.php", user)
  }
}
