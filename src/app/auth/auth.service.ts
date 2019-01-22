import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class AuthService{
    private previousUrl: string = undefined;
    private currentUrl: string = undefined;
  
    constructor(private router : Router) {
        this.currentUrl = this.router.url;
        router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {        
            this.previousUrl = this.currentUrl;
            this.currentUrl = event.url;
            console.log(this.currentUrl)
            localStorage.setItem('previousUrl', this.previousUrl)
          };
        });
      }
    
    getCurrentUser(){
       return localStorage.getItem('username')
    }
}