import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from 'src/app/core/services/auth-services.service';
@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {
  userProfileFrm: FormGroup;
  userBankDetailsFrm: FormGroup;
  userAddressFrm:FormGroup;
  userNomineeFrm:FormGroup;
  memberData: any;
  states:any;
  stateId:any;
  district:any;
  branchName:any;
  bankName:any;
  userData:any;
  constructor(private fb: FormBuilder,private auth: AuthServicesService) { 
    this.userProfileFrm = this.fb.group({
      name_: [null, Validators.compose([Validators.required])],
      mobileNo_: ['', Validators.compose([Validators.required])],
      email_: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.compose([Validators.required])],
    });

    this.userBankDetailsFrm = this.fb.group({
      panNo_: [null, Validators.compose([Validators.required])],
      acctName_: [null, Validators.compose([Validators.required])],
      acctNo_: [null, Validators.compose([Validators.required])],
      ifscCode_: [null, Validators.compose([Validators.required])],
      bankName_: [null, Validators.compose([Validators.required])],
      branchName_: [null, Validators.compose([Validators.required])],
    });
     this.userAddressFrm = this.fb.group({
      state_: [null, Validators.compose([Validators.required])],
      district_: ['', Validators.compose([Validators.required])],
      pinCode_: [null, Validators.compose([Validators.required])],
      address_: [null, Validators.compose([Validators.required])],
    });

    this.userNomineeFrm = this.fb.group({
      nomineeName_: [null, Validators.compose([Validators.required])],
      nomineeRelation_: ['', Validators.compose([Validators.required])],
      nomineeMobile_: [null, Validators.compose([Validators.required])],
      nomineeAddress_: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.dashboardMemberData();
  }

  loadUserProfileFromData() {
    console.log("this.memberData ", this.memberData);
    this.userProfileFrm.get('name_').setValue(this.memberData.name);
    this.userProfileFrm.get('mobileNo_').setValue(this.memberData.mobile);
    this.userProfileFrm.get('email_').setValue(this.memberData.email_id);
    this.userProfileFrm.get('gender').setValue(this.memberData.gender);
  }

  loadUserAddressData() {
    this.userAddressFrm.get('state_').setValue(this.memberData.state_name);
    this.userAddressFrm.get('district_').setValue(this.memberData.dist_name);
    this.userAddressFrm.get('pinCode_').setValue(this.memberData.pin_code);
    this.userAddressFrm.get('address_').setValue(this.memberData.address);
  }

  loadUserNomineeData() {
    this.userNomineeFrm.get('nomineeName_').setValue(this.memberData.nominee_name);
    this.userNomineeFrm.get('nomineeRelation_').setValue(this.memberData.nominee_relation);
    this.userNomineeFrm.get('nomineeMobile_').setValue(this.memberData.nominee_mobile);
    this.userNomineeFrm.get('nomineeAddress_').setValue(this.memberData.nominee_address);
  }

  loadUserBankData() {
    this.userBankDetailsFrm.get('panNo_').setValue(this.memberData.pan_no);
    this.userBankDetailsFrm.get('acctName_').setValue(this.memberData.acc_name);
    this.userBankDetailsFrm.get('acctNo_').setValue(this.memberData.account_no);
    this.userBankDetailsFrm.get('ifscCode_').setValue(this.memberData.ifsc_code);
    this.userBankDetailsFrm.get('bankName_').setValue(this.memberData.bank_name);
    this.userBankDetailsFrm.get('branchName_').setValue(this.memberData.branch_name);
  }

  dashboardMemberData() {
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token
    };
    this.auth.dashBoardMemberApi(user).subscribe((res) => {
      this.memberData = res;
      console.log(this.memberData);
      this.loadUserProfileFromData();
      this.loadUserAddressData();
      this.loadUserNomineeData();
      this.loadUserBankData();
      this.stateName();
      
    });
  }

  stateName(){
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token
    };
    this.auth.stateApi(user).subscribe((res)=>{
      this.states = res['result'];
    })
  }

  selectState(event){
    this.stateId = event.target.value;
    this.districtName();
  }

  districtName(){
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token,
      state_id :this.stateId,
    };
    this.auth.districtApi(user).subscribe((res)=>{
      this.district = res['result'];
    })
  }

  ifscCode(){
    const user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token,
      ifsc_code:this.userBankDetailsFrm.value.ifscCode_,
    };
    this.auth.bankIfscCodeApi(user).subscribe((res)=>{
      this.bankName = res['result'].bank_name;
      this.branchName = res['result'].branch_name;
    })
  }


  submit(Obj) {
    console.log(Obj)
    let payload = {
      userName: Obj.name_,
      emailId: Obj.email_,
      mobileNo: Obj.mobileNo_,
    };
  }


}
