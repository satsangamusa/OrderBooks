import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../services/global-data.service';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { Platform } from '@ionic/angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Filesystem, Directory, Encoding} from '@capacitor/filesystem';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.page.html',
  styleUrls: ['./view-order.page.scss'],
})
export class ViewOrderPage implements OnInit {

  constructor(public platform: Platform, public router: Router, public globalData: GlobalDataService,
    public file: File,
    public fileOpener: FileOpener
  ) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }
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
pdfBlob:any;
  createPdf(action = 'open') {
    console.log(pdfMake);
    const documentDefinition = this.getDocumentDefinition();
    let fileName='OrderBooks_'+new Date().getTime()+'.pdf';
   let gen= pdfMake.createPdf(documentDefinition);
    gen.getBase64((data) => {
       this.base64pdf= data;
       this.openPdf(fileName)
    });
  }


  openPdf(fileName) {
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
  getDocumentDefinition() {   
    let buildPdf: any = {};
    let content: any = [];
    content.push(this.getHeader1());
    content.push(this.getHeader2());
    content.push({
      columns: this.getUserForm(),
    });
    if (this.totalTeluguQty > 0) {
      content.push({
        text: 'Telugu Books',
        style: 'header',
        alignment: 'center',
        fontSize: 18,
      });
      content.push(this.getTableData('Total Telugu Books',this.teluguBooks,this.totalTeluguQty,this.totalTeluguAmt));
    }
    if (this.totalKannadaQty > 0) {
      content.push({
        text: 'Kannada Books',
        style: 'header',
        alignment: 'center',
        fontSize: 18,
      });
      content.push(this.getTableData('Total Kannada Books',this.kannadaBooks,this.totalKannadaQty,this.totalKannadaAmt));
    }

    if(this.allTotalQty>0){
      content.push(this.getAllTotalRowData());
    }
    buildPdf['content']=content;
    buildPdf['styles']=this.getPdfStyles();
    return buildPdf;
  }
  getHeader1() {
    return {
      text: 'Prabodha Seva Samithi',
      bold: true,
      fontSize: 20,
      alignment: 'center',
      margin: [0, 0, 0, 20],
    };
  }
  getHeader2() {
    return {
      text: 'Books Order',
      bold: true,
      fontSize: 18,
      alignment: 'center',
      margin: [0, 0, 0, 20],
    };
  }
  getPdfStyles() {
    const pdfStyles = {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 20, 0, 10],
        decoration: 'underline',
      },
      name: {
        fontSize: 16,
        bold: true,
      },
      jobTitle: {
        fontSize: 14,
        bold: true,
        italics: true,
      },
      sign: {
        margin: [0, 50, 0, 10],
        alignment: 'right',
        italics: true,
      },
      tableHeader: {
        bold: true,
      },
    };
    return pdfStyles;
  }
  getUserForm() {
    const userForm = [
      [
        {
          text: 'Committee Name: ' + this.globalData.committeeName,
          style: 'name',
        },
        {
          text: 'President Name: ' + this.globalData.presidentName,
          style: 'name',
        },
        {
          text: 'Primary Email Id: ' + this.globalData.emailId1,
          style: 'name',
        },
        {
          text: 'Secondary Email Id: ' + this.globalData.emailId2,
          style: 'name',
        },
        {
          text: 'Primary Phone Number: ' + this.globalData.phoneNumber1,
          style: 'name',
        },
        {
          text: 'Secondary Phone Number: ' + this.globalData.phoneNumber2,
          style: 'name',
        },
      ],
    ];
    return userForm;
  }

  getTableData(language,books,totalQty,totalAmt){
    let tbody:any=[];
    tbody.push(this.getTableHeader());
    for(let td of books){
      console.log(td.ename)
      tbody.push([td.ename,td.price,td.qty,td.price*td.qty]);
    }
    tbody.push(['','','','']);
    tbody.push(['','','','']);
    tbody.push([language,'',totalQty,totalAmt])
    return {
      layout: 'lightHorizontalLines', // optional
      table: {
        headerRows: 1,
        //widths: ['*', 'auto', 100, '*'],
        widths: [280, '*', 100, '*'],
        body: tbody,
      },
    };
  }

  getAllTotalRowData(){
    let tbody:any=[];
    tbody.push(['','','','']);
    tbody.push(['','','','']);
    tbody.push(['','','','']);
    tbody.push(['','','','']);
    tbody.push(['','','','']);
    tbody.push(['All Total Books','',this.allTotalQty,this.allTotalAmt])
    return {
      layout: 'lightHorizontalLines', // optional
      table: {
        headerRows: 1,
        //widths: ['*', 'auto', 100, '*'],
        widths: [280, '*', 100, '*'],
        body: tbody,
      },
    };
  }
  getTableHeader(){
    return [
      { text: 'Name', bold: true },
      { text: 'Price', bold: true },
      { text: 'Quantity', bold: true },
      { text: 'Amount', bold: true },
    ];
  }
}
