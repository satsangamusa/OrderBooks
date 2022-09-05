import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  errorMessage: any = null;
  selectedLanguage: any = null;
  constructor(public globalData: GlobalDataService, public router: Router) {
   }
  ngOnInit() {
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
  
      this.globalData.selectedLanguage = this.selectedLanguage;
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
