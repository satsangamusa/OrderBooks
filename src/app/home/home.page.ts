import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Global } from 'src/app/global-data.service';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx'; 
import { LoadingService } from 'src/app/loading-service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor( public globalData:Global,
    public newHttp:HTTP, 
    public loader:LoadingService, 
    public router:Router){
    
    console.log(this.globalData.getRestServerUrl());
  }
  presidentName:any=null;
  committeeName:any=null;
  phoneNumber:any=null;
  comments:any=null;
  presidentNameErr:any=null;
  committeeNameErr:any=null;
  phoneNumberErr:any=null;
  commentsErr:any=null;
  submitOrder(){
    if(this.committeeName==null){
      this.committeeNameErr="Please enter Committee Name";
      return;
    }else{
      this.committeeNameErr=null;
    }
    if(this.presidentName==null){
      this.presidentNameErr="Please enter President Name";
      return;
    }else{
      this.presidentNameErr=null;
    }
    
    if(this.phoneNumber==null){
      this.phoneNumberErr="Please enter Phone Number";
      return;
    }else{
      this.phoneNumberErr=null;
    }
    if(this.comments==null){
      this.commentsErr="Please enter Books order ";
      return;
    }else{
      this.commentsErr=null;
    }
    var booksOrderVo:any={
      "subject":this.committeeName+":Books Order",
      "body":"Committee Name: "+this.committeeName+", President Name: "
        +this.presidentName+" ,Phone Number: "+this.phoneNumber+" , "+this.comments 
    };
    this.newHttp.setDataSerializer('json');
    this.loader.present();
    //http://localhost:8080/sns/notification/publish
    this.newHttp.post(this.globalData.getRestServerUrl()+'publish', 
    booksOrderVo, {'content-type':'application/json'})
    .then(data => {
      console.log(data.status);
      var temp:any= JSON.parse(data.data);  
      console.log(temp);
       if(data.status==200){
         alert('Books Order sent successfully');
        this.loader.dismiss();
        this.comments=null;
        this.phoneNumber=null;
        this.committeeName=null;
        this.presidentName=null;
       }
       
      
    })
    .catch(error => {
      console.log(error);
      this.loader.dismiss();
    });
    
  }
   
}
