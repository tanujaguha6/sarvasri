import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { AuthServicesService } from 'src/app/core/services/auth-services.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {
  userData:any;
  constructor(private auth:AuthServicesService,private router:Router) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
   }

  logOut(){
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token
    };
    this.auth.logout(user).subscribe((res) => {
      localStorage.clear();
      this.router.navigate(['/auth/signin'])
    });
  }
}
