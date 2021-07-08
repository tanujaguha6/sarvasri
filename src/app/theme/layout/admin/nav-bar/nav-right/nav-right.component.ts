import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { AuthServicesService } from '../../../../../core/services/auth-services.service';

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
    this.auth.logout().subscribe((res) => {
      localStorage.clear();
      this.router.navigate(['/auth/signin'])
    });
  }
}
