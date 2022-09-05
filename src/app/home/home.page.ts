import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../services/global-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  committeeName: any;
  presidentName: any;
  emailId1: any;
  emailId2: any;
  phoneNumber1: any;
  phoneNumber2: any;
  formGrp: FormGroup;
  constructor(public formBuilder: FormBuilder, public globalData: GlobalDataService, public router: Router) {

  }

  ngOnInit() {
    this.formGrp = this.formBuilder.group({
      emailId1: ['', [Validators.required, Validators.email]],
      emailId2: ['', [Validators.required, Validators.email]],
      committeeName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      presidentName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      phoneNumber1: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      phoneNumber2: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
    })
  }

  doSubmit() {
    this.globalData.committeeName = this.committeeName;
    this.globalData.presidentName = this.presidentName;
    this.globalData.phoneNumber1 = this.phoneNumber1;
    this.globalData.phoneNumber2 = this.phoneNumber2;
    this.globalData.emailId2 = this.emailId2;
    this.globalData.emailId1 = this.emailId1;
    this.router.navigateByUrl('language');
  }
}
