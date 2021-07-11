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
}
