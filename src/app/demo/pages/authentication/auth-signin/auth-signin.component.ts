import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from 'src/app/core/services/auth-services.service';
@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loggedOut = false;
  ipAddress: string;
  constructor(private router : Router,
     private auth: AuthServicesService,
     private fb: FormBuilder) { 
      this.loginForm = this.fb.group({
        userName: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(3)]],
      });
     }

  ngOnInit() {
    // this.auth.getIpAddress().subscribe((res: any) => {
    //   this.ipAddress = res.ip;
    //   console.log(this.ipAddress)
    // })
    if(localStorage.getItem("logout")){
      this.loggedOut = true;
      localStorage.clear();
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(){

    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const { userName, password } = this.loginForm.value;
    const user = {
      username: userName,
      password,
      //logintime: '2021-04-15 00:01:00',
      ip_address: "12345",
      device_id: '485asas55asas',
      //logintype: 'member',
    };

    this.auth.login(user).subscribe((res) => {
      localStorage.setItem('userData', JSON.stringify(res));
      this.router.navigate(['dashboard/default'])
      //this.router.navigate(['/myshpl/dashboard']);
      // this.submitted = false;
      // this.loginForm.reset();
    });
  }

}
