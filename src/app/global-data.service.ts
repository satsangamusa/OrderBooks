import { Injectable } from '@angular/core';
@Injectable({ 
   providedIn: 'root'
 }) 
export class Global {
  
 constructor() {
 }
 restServerUrl:any="http://localhost:8080/sns/notification/";
    public getRestServerUrl(){
      return this.restServerUrl;
    }
   
}
