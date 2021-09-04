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
  kycDetails: FormGroup;
  memberData: any;
  states: any;
  stateId: any;
  district: any;
  userData: any;
  user: any;
  displayData: any;
  showModals: boolean;
  responseMessage: string;
  responseStatus: number;
  showAlert: Boolean = true;
  image: any;
  formdata: any;
  fileToUpload: File | null = null;
  submitStatus: {
    userProfileFrm:Boolean ,
    userBankDetailsFrm:Boolean,
    userAddressFrm: Boolean,
    userNomineeFrm:Boolean,
    kycDetails: Boolean 
  }
  showButton: {
    bank_details: Boolean,
    pan: Boolean,
    adhaar_voter: Boolean
  }
  @ViewChild('t') tabs;
  constructor(private fb: FormBuilder, private modalService: NgbModal,
    private auth: AuthServicesService, private profile: ProfileService) {
    this.userProfileFrm = this.fb.group({
      member_name : [null, Validators.compose([Validators.required])],
      mobile : ['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required,Validators.email])],
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
      nominee_mobile : [null, Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
      nominee_address : [null],
    });

    this.kycDetails = this.fb.group({
      adhaar_voter : [null, Validators.compose([Validators.required])],
      pan : ['', Validators.compose([Validators.required])],
      bank_details : [null, Validators.compose([Validators.required])]
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
      userBankDetailsFrm: false,
      kycDetails: false
    };
    this.showButton= {
      bank_details: false,
      pan: false,
      adhaar_voter: false
    }
    this.displayData =  JSON.parse(localStorage.getItem('userData'));
    this.dashboardMemberData();
  }
  handleFileInput(files: FileList, type, doc_type= null) {
    this.fileToUpload = files.item(0);
    this.showAlert = false;
    this.responseStatus = 0;
    this.responseMessage = "";
    if(this.fileToUpload.type.indexOf('image') === -1){
      this.showAlert = true;
      this.responseStatus = 2;
      this.responseMessage = "Image file should be uploaded";
      window.scroll(0,0);
      return false;
    }
    const formData = new FormData();
    formData.append('username', this.user.username);
    formData.append('login_type', this.user.login_type);
    formData.append('auth_token', this.user.auth_token);
    this.uploadFileToActivity(formData, type);
    
      const reader = new FileReader();
      reader.onload = () => {
        if(type === 'profile_img'){
        formData.append(type, this.fileToUpload);
        this.displayData.profile_image = reader.result as string;
        }
        else{
        this.showButton[type] = true;
        formData.append('kyc_img', this.fileToUpload);
        formData.append('doc_type', doc_type);
        this.kycDetails.get(type).setValue(reader.result as string);
        }
      }
      reader.readAsDataURL(files[0])
    
      }
  uploadFileToActivity(formData, type) {
    
    this.formdata = formData;
    if(type === "profile_img"){
    this.profile.postFile(this.formdata).subscribe(data => {
      this.showAlert = true;
      if(data['status'] === 1){
        this.responseStatus = data['status'];
        this.responseMessage = "Page will be auto refreshed to update the image!";
        window.scroll(0,0);
        this.dashboardMemberData();
        setTimeout(function(){
          location.reload();
        },4000);
      }
      else{
        this.responseStatus = data['status'];
        this.responseMessage = data['message'];
      }
    }, error => {
          console.log(error);
      });
    }
    else{
      console.log(this.formdata)
    }
  }
  dismissAlert(){
    this.showAlert = false;
  }
  tabchange(id,type){
    this.submitStatus[type] = true;
    if(this[type].valid)
    this.tabs.select(id);
  }
  loadUserProfileFromData() {
    this.displayData.profile_image =  this.memberData.profile_image
    localStorage.setItem('userData',JSON.stringify(this.displayData));
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
  loadKYC() {
    this.kycDetails.get('adhaar_voter').setValue(this.memberData.identity_image);
    this.kycDetails.get('pan').setValue(this.memberData.pan_image);
    this.kycDetails.get('bank_details').setValue(this.memberData.bank_image);
  }

  dashboardMemberData() {
    
    this.auth.dashBoardMemberApi(this.user).subscribe((res) => {
      this.memberData = res;
      this.loadUserProfileFromData();
      this.loadUserAddressData();
      this.loadUserNomineeData();
      this.loadUserBankData();
      this.loadKYC();
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
    this.showAlert = true;
    if(type === "kycDetails"){
      this.showButton[payload] = false;
      this.profile.postKyc(api,this.formdata).subscribe(data => {
        this.showAlert = true;
        if(data['status'] === 1){
          
          this.responseStatus = data['status'];
          this.responseMessage = "Image file uploaded successfully!";
          window.scroll(0,0);
        }else{
          this.responseStatus = data['status'];
          this.responseMessage = data['message'];
          window.scroll(0,0);
        }
        }, error => {
          console.log(error);
        });
    }
    else if(this[type].valid){
      this.profile.member_add(api,{...this.user,...payload.value}).subscribe(res=>{
        this.responseMessage = res['message'];
        this.responseStatus = res['status'];
        window.scroll(0,0);
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
