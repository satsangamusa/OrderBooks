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
  generatePdfMake(action = 'open') {
    console.log(pdfMake);
    const documentDefinition = this.getDocumentDefinition();
   // pdfMake.createPdf(documentDefinition);
    let fileName='OrderBooks_'+new Date().getTime()+'.pdf';
     
   let gen= pdfMake.createPdf(documentDefinition);
    
    gen.getBase64((data) => {
       this.base64pdf= data;
       this.openPDFFile(fileName)
    });
    
    /*
    pdfMake.createPdf(documentDefinition).getBase64(
      (encodedString)=> {
         base64 = encodedString;
         this.base64pdf = btoa(base64);
         //this.openPDFFile(fileName);

          // Filesystem.writeFile({
          //   path: fileName,
          //   data: base64,
          //   directory: Directory.Documents,
          //   encoding: Encoding.UTF8,
          // }).then(response=>{
          //   console.log(' file wrote success ', response)
          //   Filesystem.readFile({
          //     path: fileName,
          //     directory: Directory.Documents,
          //     encoding: Encoding.UTF8,
          //   }).then(da=>{
          //     console.log('file read successfully ', JSON.stringify(da));
          //     //Browser.open({ url: contents});
             
          //   });
          // });
      
        
        
      } 
  );*/
   
   
     
   //this.openPDFFile(fileName);
    /*switch (action) {
      case 'open':
        pdfMake.createPdf(documentDefinition).open();
        break;
      case 'download':
        pdfMake.createPdf(documentDefinition).download();
        break;
      default:
        pdfMake.createPdf(documentDefinition).open();
        break;
    }*/
  }



  processPdf() {
    let rbooks: any = []
    const pdf = new jsPDF('p', 'pt', 'a4', true);

    pdf.setFontSize(20);
    pdf.text("Prabodha Seva Samithi", 190, 40);
    pdf.text("Books Order", 230, 70);

    pdf.setFontSize(15);
    pdf.text("Committee Name::" + this.globalData.committeeName, 60, 100)
    pdf.text("President Name::" + this.globalData.presidentName, 60, 130)
    pdf.text("Primary Email Id::" + this.globalData.emailId1, 60, 160)
    pdf.text("Secondary Email Id::" + this.globalData.emailId2, 60, 190)
    pdf.text("Primary Phone Number::" + this.globalData.phoneNumber1, 60, 220)
    pdf.text("Secondary Phone Number::" + this.globalData.phoneNumber2, 60, 250)
    pdf.setFontSize(10);
    let j = 16;
    for (var i = 0; i < rbooks.length; i++) {
      j++;
      pdf.text(rbooks[i].name, 5, 10 * (j + 1))
      pdf.text("" + rbooks[i].count, 160, 10 * (j + 1))
      if (i == 8 || (i + 1) % 25 == 0) {
        j = 1;

        pdf.addPage();
        pdf.setFontSize(14)
        pdf.text("గ్రంథము పేరు", 20, 10)
        pdf.text("కొలత", 160, 10);
      }
    }
    //pdf.setLanguage("te");
    pdf.save('hello.pdf');

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
      let fileName = "OrderBooks_" + new Date().getTime();
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

newOpenFile(fileName, blob){
  const writeDirectory = this.platform.is('ios') ? this.file.dataDirectory : this.file.externalDataDirectory;

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
   /* return {
      content: [
        this.getHeader1(),
        this.getHeader2(),
        {
          columns: this.getUserForm(),
        },
        {
          text: 'Telugu Books',
          style: 'header',
          alignment: 'center',
          fontSize: 18,
        },
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],

            body: [
              [
                { text: 'Name', bold: true },
                { text: 'Price', bold: true },
                { text: 'Quantity', bold: true },
                { text: 'Amount', bold: true },
              ],
              ['Thraitha Sidddhantha Bhagavadgeetha', '500', '2', '1000'],
            ],
          },
        },
      ],

      styles: this.getPdfStyles(),
    };*/
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
