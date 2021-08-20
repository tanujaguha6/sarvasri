import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.scss']
})
export class MemberAddComponent implements OnInit {
  userDetails : any;
  constructor(private location:Location) { }

  ngOnInit(): void {
    let stateData = this.location.getState();
    
    if(stateData && Object.keys(stateData).length>1){
      this.userDetails = this.location.getState();
      delete(this.userDetails.navigationId);
    }
    else{
      this.userDetails = JSON.parse(localStorage.getItem('userData'));
      this.userDetails = [this.userDetails.name,this.userDetails.username,this.userDetails.profile_image];
        
    }
  }

}
