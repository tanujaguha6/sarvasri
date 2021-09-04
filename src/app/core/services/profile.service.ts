import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  formda: any = [];
  constructor(private http: HttpClient) { }
  member_add(api: any, memberData: any) {
    return this.http.post("https://myshpl.com/api/member/"+api, memberData)
  }
  postFile(userdata) {
    let headers = new HttpHeaders(); 
      headers.delete("Content-Type");
      return this.http
      .post('https://myshpl.com/api/member/profile_image_upload1.php', userdata, 
      {
        headers: headers
      }
    );
  }
  postKyc(api, userdata) {
    let headers = new HttpHeaders(); 
      headers.delete("Content-Type");
      return this.http
      .post('https://myshpl.com/api/member/'+ api, userdata, 
      {
        headers: headers
      }
    );
  }
}
