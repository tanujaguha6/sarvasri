import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthServicesService } from 'src/app/core/services/auth-services.service';
import { ProfileService } from '../../../core/services/profile.service';
let closeResult = '';
@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {
  userProfileFrm: FormGroup;
  userBankDetailsFrm: FormGroup;
  userAddressFrm: FormGroup;
  userNomineeFrm: FormGroup;
  memberData: any;
  states: any;
  stateId: any;
  district: any;
  userData: any;
  user: any;
  displayData: any;
  showModals: boolean;
  submitStatus: {
    userProfileFrm:Boolean ,
    userBankDetailsFrm:Boolean,
    userAddressFrm: Boolean,
    userNomineeFrm:Boolean 
  }
  @ViewChild('t') tabs;
  constructor(private fb: FormBuilder, private modalService: NgbModal,
    private auth: AuthServicesService, private profile: ProfileService) {
    this.userProfileFrm = this.fb.group({
      member_name : [null, Validators.compose([Validators.required])],
      mobile : ['', Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      gender: ['M', Validators.compose([Validators.required])],
    });

    this.userBankDetailsFrm = this.fb.group({
      pan_no: [null, Validators.compose([Validators.required])],
      acc_name: [null, Validators.compose([Validators.required])],
      account_no: [null, Validators.compose([Validators.required])],
      ifsc_code : [null, Validators.compose([Validators.required])],
      bank_name: [null, Validators.compose([Validators.required])],
      branch_name: [null, Validators.compose([Validators.required])],
    });
    this.userAddressFrm = this.fb.group({
      state_id : [null, Validators.compose([Validators.required])],
      dist_id : ['', Validators.compose([Validators.required])],
      pin_code : [null, Validators.compose([Validators.required])],
      address : [null, Validators.compose([Validators.required])],
    });

    this.userNomineeFrm = this.fb.group({
      nominee_name : [null, Validators.compose([Validators.required])],
      nominee_relation : ['', Validators.compose([Validators.required])],
      nominee_mobile : [null, Validators.compose([Validators.required])],
      nominee_address : [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.user = {
      username: this.userData.username,
      login_type: this.userData.login_type,
      auth_token: this.userData.auth_token
    };
    this.submitStatus = {
      userProfileFrm: false,
      userAddressFrm: false,
      userNomineeFrm: false,
      userBankDetailsFrm: false
    };
    this.displayData =  JSON.parse(localStorage.getItem('userData'));
    this.dashboardMemberData();
  }
  tabchange(id,type){
    this.submitStatus[type] = true;
    if(this[type].valid)
    this.tabs.select(id);
  }
  loadUserProfileFromData() {
    this.userProfileFrm.get('member_name').setValue(this.memberData.name);
    this.userProfileFrm.get('mobile').setValue(this.memberData.mobile);
    this.userProfileFrm.get('email').setValue(this.memberData.email_id);
    this.userProfileFrm.get('gender').setValue(this.memberData.gender);
  }

  loadUserAddressData() {
    this.userAddressFrm.get('state_id').setValue(this.memberData.state_id);
    this.stateId = this.memberData.state_id;
    this.districtName();
    this.userAddressFrm.get('dist_id').setValue(this.memberData.dist_id);
    this.userAddressFrm.get('pin_code').setValue(this.memberData.pin_code);
    this.userAddressFrm.get('address').setValue(this.memberData.address);
  }

  loadUserNomineeData() {
    this.userNomineeFrm.get('nominee_name').setValue(this.memberData.nominee_name);
    this.userNomineeFrm.get('nominee_relation').setValue(this.memberData.nominee_relation);
    this.userNomineeFrm.get('nominee_mobile').setValue(this.memberData.nominee_mobile);
    this.userNomineeFrm.get('nominee_address').setValue(this.memberData.nominee_address);
  }

  loadUserBankData() {
    this.userBankDetailsFrm.get('pan_no').setValue(this.memberData.pan_no);
    this.userBankDetailsFrm.get('acc_name').setValue(this.memberData.acc_name);
    this.userBankDetailsFrm.get('account_no').setValue(this.memberData.account_no);
    this.userBankDetailsFrm.get('ifsc_code').setValue(this.memberData.ifsc_code);
    this.ifscCode();
  }

  dashboardMemberData() {
    
    this.auth.dashBoardMemberApi(this.user).subscribe((res) => {
      this.memberData = res;
      this.loadUserProfileFromData();
      this.loadUserAddressData();
      this.loadUserNomineeData();
      this.loadUserBankData();
      this.stateName();

    });
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

  ifscCode() {
    this.user.ifsc_code = this.userBankDetailsFrm.value.ifsc_code;
    this.auth.bankIfscCodeApi(this.user).subscribe((res) => {
        this.userBankDetailsFrm.get('bank_name').setValue(res['result'].bank_name);
        this.userBankDetailsFrm.get('branch_name').setValue(res['result'].branch_name);
    })
  }


  submit(api, type, payload) {
    this.submitStatus[type] = true;
    if(this[type].valid){
      this.profile.member_add(api,{...this.user,...payload.value}).subscribe(res=>{
        console.log(res);
      })
    }

  }

  showIdCard(idcard) {
    this.modalService.open(idcard, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
      closeResult = `Closed with: ${result}`;
    }, (reason) => {
      return reason;
    });
  }

  welcomeLetter(letter){
    this.modalService.open(letter, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
      closeResult = `Closed with: ${result}`;
    
    }, (reason) => {
      return reason;
    });
  }

  closeModal(){
    this.modalService.dismissAll();
  }
  printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    location.reload();
    //document.body.innerHTML = originalContents;
    
}

}
