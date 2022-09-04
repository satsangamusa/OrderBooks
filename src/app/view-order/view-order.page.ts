import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../services/global-data.service';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { File, IWriteOptions } from '@awesome-cordova-plugins/file/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.page.html',
  styleUrls: ['./view-order.page.scss'],
})
export class ViewOrderPage implements OnInit {

  constructor(public platform: Platform, public router: Router, public globalData: GlobalDataService,
    public file: File,
    public fileOpener: FileOpener
  ) { }
  teluguBooks: any = [];
  totalTeluguQty = 0;
  totalTeluguAmt = 0;
  kannadaBooks: any = [];
  totalKannadaQty = 0;
  totalKannadaAmt = 0
  englishBooks: any = [];
  totalEnglishQty = 0;
  totalEnglishAmt = 0
  hindiBooks: any = [];
  totalHindiQty = 0;
  totalHindiAmt = 0
  urduBooks: any = [];
  totalUrduQty = 0;
  totalUrduAmt = 0
  odiyaBooks: any = [];
  totalOdiyaQty = 0;
  totalOdiyaAmt = 0
  tamilBooks: any = [];
  totalTamilQty = 0;
  totalTamilAmt = 0
  base64pdf = '';
  allTotalQty = 0;
  allTotalAmt = 0;
  public getScreenWidth: any;
  public getScreenHeight: any;
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    for (const t of this.globalData.teluguBooks) {
      if (t.qty >= 1) {
        this.teluguBooks.push(t);
        this.totalTeluguQty = this.totalTeluguQty + t.qty;
        this.totalTeluguAmt = this.totalTeluguAmt + t.qty * t.price;
      }
    }
    for (const t of this.globalData.kannadaBooks) {
      if (t.qty >= 1) {
        this.kannadaBooks.push(t);
        this.totalKannadaQty = this.totalKannadaQty + t.qty;
        this.totalKannadaAmt = this.totalKannadaAmt + t.qty * t.price;
      }
    }
    for (const t of this.globalData.englishBooks) {
      if (t.qty >= 1) {
        this.englishBooks.push(t);
        this.totalEnglishQty = this.totalEnglishQty + t.qty;
        this.totalEnglishAmt = this.totalEnglishAmt + t.qty * t.price;
      }
    }
    for (const t of this.globalData.hindiBooks) {
      if (t.qty >= 1) {
        this.hindiBooks.push(t);
        this.totalHindiQty = this.totalHindiQty + t.qty;
        this.totalHindiAmt = this.totalHindiAmt + t.qty * t.price;
      }
    }
    for (const t of this.globalData.urduBooks) {
      if (t.qty >= 1) {
        this.urduBooks.push(t);
        this.totalUrduQty = this.totalUrduQty + t.qty;
        this.totalUrduAmt = this.totalUrduAmt + t.qty * t.price;
      }
    }
    for (const t of this.globalData.odiyaBooks) {
      if (t.qty >= 1) {
        this.odiyaBooks.push(t);
        this.totalOdiyaQty = this.totalOdiyaQty + t.qty;
        this.totalOdiyaAmt = this.totalOdiyaAmt + t.qty * t.price;
      }
    }
    for (const t of this.globalData.tamilBooks) {
      if (t.qty >= 1) {
        this.tamilBooks.push(t);
        this.totalTamilQty = this.totalTamilQty + t.qty;
        this.totalTamilAmt = this.totalTamilAmt + t.qty * t.price;
      }
    }
    this.allTotalQty = this.totalTeluguQty + this.totalKannadaQty + this.totalEnglishQty + this.totalHindiQty + this.totalUrduQty + this.totalTamilQty + this.totalOdiyaQty;
    this.allTotalAmt = this.totalTeluguAmt + this.totalKannadaAmt + this.totalEnglishAmt + this.totalHindiAmt + this.totalUrduAmt + this.totalTamilAmt + this.totalOdiyaAmt;

  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  generatePdf() {
    const imgData = document.getElementById('orderDetails') as HTMLCanvasElement;
    html2canvas(imgData).then(canvas => {
      var pdf = new jsPDF('p', 'pt', 'a4', true);
      pdf.setFont("arial", "bold");
      pdf.setFontSize(10);

      let pages = Math.ceil(canvas.height / (this.getScreenHeight * 2));
      for (let i = 0; i <= pages; i += 1) {
        if (i > 0) {
          pdf.addPage();
        }
        let srcImg = canvas;
        let sX = 0;
        let sY = 1430 * i;
        let sWidth = canvas.width + 35;
        let sHeight = 1455;
        let dX = 0;
        let dY = 0;
        let dWidth = this.getScreenWidth * 2 - 200;
        let dHeight = 1400;
        let onePageCanvas = document.createElement("canvas") as HTMLCanvasElement;
        onePageCanvas.setAttribute('width', '' + sWidth);
        onePageCanvas.setAttribute('height', '' + sHeight);

        let ctx = onePageCanvas.getContext('2d');

        ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
        let canvasDataURL = onePageCanvas.toDataURL("image/png");
        let width = onePageCanvas.width;
        let height = onePageCanvas.height;

        pdf.setPage(i + 1);
        //pdf.addImage(canvasDataURL, 'PNG',35, 35, (width * 0.1), (height * 0.2));
        pdf.addImage(canvasDataURL, 'PNG', 45, 35, width * 0.3, height * 0.2, '', 'FAST');
      }
      let fileName = "OrderBooks_"+new Date().getTime();
      pdf.save(fileName);
      //this.base64pdf = 'data:application/pdf;base64,' + btoa(pdf.output());
      this.base64pdf = btoa(pdf.output());
      this.openPDFFile(fileName);
    });
  }


  openPDFFile(fileName) {
    
    const writeDirectory = this.platform.is('ios') ? this.file.dataDirectory : this.file.externalDataDirectory;
    this.file.createFile(writeDirectory, fileName, true).then((response) => {
      console.log('file created', response);
      const byteCharacters = atob(this.base64pdf);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });
      this.file.writeExistingFile(writeDirectory, fileName, blob).then((response) => {
        console.log('successfully wrote to file', response);
        this.fileOpener.open(writeDirectory + fileName, 'application/pdf').then((response) => {
          console.log('opened PDF file successfully', response);
        }).catch((err) => {
          console.log('error in opening pdf file', err);
        });
      }).catch((err) => {
        console.log('error writing to file', err);
      });

    }).catch((err) => {
      console.log('Error creating file', err);
    });
  }

}
