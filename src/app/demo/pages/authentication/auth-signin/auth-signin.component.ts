import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from 'src/app/core/services/auth-services.service';
import {  
  CookieService  
} from 'ngx-cookie-service'; 

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loggedOut = false;
  errormessage: string;
  ipAddress: string;
  constructor(private router: Router,
    private auth: AuthServicesService,
    private fb: FormBuilder,
    private cookieService: CookieService) {
      
    this.loginForm = this.fb.group({
      userName: [this.cookieService.get('username'), [Validators.required, Validators.minLength(3)]],
      password: [this.cookieService.get('password'), [Validators.required, Validators.minLength(3)]],
      rememberMe: [this.cookieService.get('rememberCurrentUser')]
    });
      
    if (this.auth.currentUserValue) { 
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    // this.auth.getIpAddress().subscribe((res: any) => {
    //   this.ipAddress = res.ip;
    //   console.log(this.ipAddress)
    // })
    
    if (localStorage.getItem("logout")) {
      this.loggedOut = true;
      localStorage.clear();
    }
    if(localStorage.getItem("errormessage")){
      this.errormessage = localStorage.getItem("errormessage");
      localStorage.clear();
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const { userName, password, rememberMe } = this.loginForm.value;
    const user = {
      username: userName,
      password,
      rememberMe,
      //logintime: '2021-04-15 00:01:00',
      ip_address: "12345",
      device_id: '485asas55asas',
      //logintype: 'member',
    };

    this.auth.login(user).subscribe((res: any) => {
      if(res.status === 0){
        this.errormessage = res.message;
      }
      else{
        let authToken = res['auth_token'];
      localStorage.setItem('userData', JSON.stringify(res));
      localStorage.setItem('token', authToken);
      this.router.navigate(['dashboard'])
      }
  })
}

}
