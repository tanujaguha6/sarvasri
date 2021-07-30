import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { AuthServicesService } from './core/services/auth-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private auth:AuthServicesService, private router: Router, private bnIdle: BnNgIdleService) { 
    this.bnIdle.startWatching(9000).subscribe((res) => {
      if(res) {
        this.auth.logout().subscribe((res) => {
          localStorage.clear();
          localStorage.setItem("logout",'true');
          this.router.navigate(['/auth/signin'])
        });
      }
    })
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
