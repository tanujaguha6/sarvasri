import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  member_add(api: any, memberData: any) {
    return this.http.post("https://myshpl.com/api/member/"+api, memberData)
  }
}
