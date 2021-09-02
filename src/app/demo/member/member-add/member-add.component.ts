import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthServicesService } from '../../../core/services/auth-services.service';
import { ProfileService } from '../../../core/services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.scss']
})
export class MemberAddComponent implements OnInit {
  userDetails : any;
  userProfileFrm: FormGroup;
  userAddressFrm: FormGroup;
  userNomineeFrm: FormGroup;
  states: any;
  stateId: any;
  district: any;
  user: any;
  responseMessage: string;
  responseStatus: number;
  submitStatus: {
    userProfileFrm: Boolean,
    userAddressFrm: Boolean,
    userNomineeFrm: Boolean
  };
  @ViewChild('t') tabs;
  constructor(private location:Location,private fb: FormBuilder, private modalService: NgbModal,
    private auth: AuthServicesService, private profile: ProfileService, private route: ActivatedRoute) {
      this.userProfileFrm = this.fb.group({
        member_name : [null, Validators.compose([Validators.required])],
        mobile : [null, Validators.compose([Validators.required])],
        email: [null, Validators.compose([Validators.email])],
        gender: ['M', Validators.compose([Validators.required])],
        position: ['L', Validators.compose([Validators.required])],
        distributor_type: ['INDIVIDUAL', Validators.compose([Validators.required])],
        sponser_code: [null, Validators.compose([Validators.required])],
        password: [null, Validators.compose([Validators.required])]
      });

      this.userAddressFrm = this.fb.group({
        state_id : [null, Validators.compose([Validators.required])],
        dist_id : [null, Validators.compose([Validators.required])],
        pin_code : [null, Validators.compose([Validators.required])],
        address : [null],
      });
  
      this.userNomineeFrm = this.fb.group({
        nominee_name : [null],
        nominee_relation : [''],
        nominee_mobile : [null],
        nominee_address : [null],
      });
     }

  ngOnInit(): void {
    this.submitStatus = {
      userProfileFrm: false,
      userAddressFrm: false,
      userNomineeFrm: false
    };
    this.userDetails = JSON.parse(localStorage.getItem('userData'));
    this.user = {
      username: this.userDetails.username,
      login_type: this.userDetails.login_type,
      auth_token: this.userDetails.auth_token
    };
    this.route.queryParams
      .subscribe(params => {
        this.userProfileFrm.get('sponser_code').setValue(params.sponser_code);
        this.userProfileFrm.get('position').setValue(params.position);
      }
    );
    this.stateName();
  }
  tabchange(id,type){
    this.submitStatus[type] = true;
    if(this[type].valid)
    this.tabs.select(id);
  }
  stateName() {
    this.auth.stateApi(this.user).subscribe((res) => {
      this.states = res['result'];
    })
  }

  selectState(event) {
    this.stateId = event.target.value;
    this.districtName();
  }

  districtName() {
    this.user.state_id = this.stateId;
    this.auth.districtApi(this.user).subscribe((res) => {
      this.district = res['result'];
    })
  }

  submit() {
    this.submitStatus.userNomineeFrm = true;
    if(!this.userProfileFrm.valid){
      this.responseMessage =  "Enter the Profile data";
      this.responseStatus = 2;
    }
    if(!this.userAddressFrm.valid){
      this.responseMessage =  "Enter the Address";
      this.responseStatus = 2;
    }
    if(this.userProfileFrm.valid && this.userAddressFrm.valid && this.userNomineeFrm.valid){
      const Obj = {...this.user, ...this.userProfileFrm.value , ...this.userAddressFrm.value, ...this.userNomineeFrm.value};
     
      this.profile.member_add('member_add.php',Obj).subscribe(res=>{
        this.responseMessage = res['message'];
        this.responseStatus = res['status'];
        window.scroll(0,0);
      })
    }
  }


}
