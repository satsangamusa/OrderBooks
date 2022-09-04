import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-odiya',
  templateUrl: './odiya.page.html',
  styleUrls: ['./odiya.page.scss'],
})
export class OdiyaPage implements OnInit {

  odiyaBooks:any;
  totalQty=0;
  constructor(public globalData: GlobalDataService,public router:Router) { }

  ngOnInit() {
    this.odiyaBooks = this.globalData.odiyaBooks;
    
  }
  checkOut() {
    console.log(this.globalData.totalAmount);
    if (this.globalData.totalQty === 0) {
      alert('Please add books to cart');
    } else {
      this.router.navigateByUrl('view-order');
    }
  } 
  redcueQuantity(book) {
    if (book.qty >= 1) {
      book.qty = book.qty - 1;
      this.globalData.totalQty = this.globalData.totalQty - 1;
    }
    if (book.qty === undefined || book.qty === null) {
      book.qty = 0

    }

  }
  addQuantity(book) {
    if (book.qty != undefined && book.qty != null && book.qty >= 1) {
      book.qty = book.qty + 1;
      this.globalData.totalQty = this.globalData.totalQty + 1;
    } else {
      book.qty = 1;
      this.globalData.totalQty = this.globalData.totalQty +1;
    }
  }

}
