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
  emailId2:any;
  phoneNumber1:any;
  phoneNumber2: any;
  errorMessage: any = null;
  selectedLanguage: any = null;
  formGrp: FormGroup;
  constructor(public formBuilder: FormBuilder,public globalData: GlobalDataService, public router: Router) {
   
   }
   
  ngOnInit() {
    this.formGrp = this.formBuilder.group({
      emailId1: ['', [Validators.required, Validators.email]],
      emailId2: ['', [Validators.required, Validators.email]],
      committeeName: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]],
      presidentName: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]],
      phoneNumber1: ['', [Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      phoneNumber2: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
    })
    this.errorMessage = null;
    this.selectedLanguage = null;
    this.calculateTotalQty();
  }
  selectLanguage(event: any) {
    this.selectedLanguage = event?.target?.innerText;

  }
  doSubmit() {
    this.errorMessage = null;
    if (!this.selectedLanguage) {
      this.errorMessage = 'Please select the Language';
      return;
    }
    if (this.errorMessage === null) {
      this.globalData.committeeName = this.committeeName;
      this.globalData.presidentName = this.presidentName;
      this.globalData.phoneNumber1 = this.phoneNumber1;
      this.globalData.phoneNumber2 = this.phoneNumber2;
      this.globalData.emailId2=this.emailId2;
      this.globalData.emailId1=this.emailId1;
      this.globalData.selectedLanguage = this.selectedLanguage;
      console.log(this.committeeName, this.presidentName, this.phoneNumber1);
      let routeName: any = 'telugu';
      console.log(this.selectedLanguage);
      console.log(routeName);
      switch (this.selectedLanguage) {
        case 'TE':
          routeName = 'telugu'
          break;
        case 'KA':
          routeName = 'kannada';
          break;
        case 'TA':
          routeName = 'tamil';
          break;
        case 'HI':
          routeName = 'hindi';
          break;
        case 'EN':
          routeName = 'english';
          break;
        case 'OD':
          routeName = 'odiya';
          break;
        case 'UD':
          routeName = 'urdu'
          break;
        default:
          routeName = 'telugu';
          break;
      }
      this.router.navigateByUrl(routeName);


    }
  }
  async calculateTotalQty() {

    let telugu = await this.getTotal(this.globalData.teluguBooks);
    let kannada = await this.getTotal(this.globalData.kannadaBooks);
    let tamil = await this.getTotal(this.globalData.tamilBooks);
    let hindi = await this.getTotal(this.globalData.hindiBooks);
    let english = await this.getTotal(this.globalData.englishBooks);
    let urdu = await this.getTotal(this.globalData.urduBooks);
    let odiya = await this.getTotal(this.globalData.odiyaBooks);
    this.globalData.totalQty=telugu + kannada + tamil + hindi + english + urdu + odiya;

  }
  getTotal(books) {
    let tq = 0;
    for (const t of books) {
      if (t.qty != null && t.qty != undefined && t.qty > 0) {
        tq = tq + 1;
      }
    }
    return tq;
  }

}
