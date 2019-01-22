import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
    selector:'app-signin',
    templateUrl:'./signin.component.html',
    styleUrls:['./signin.component.css']
})
export class SigninComponent implements OnInit {

    constructor(private router:Router){}
    ngOnInit() {
        // reset login status

        // get return url from route parameters or default to '/'
    }

    onSignin(form:NgForm){
       let userData = JSON.parse( localStorage.getItem('user'))
       let pre = localStorage.getItem('previousUrl')
       if(userData.email === form.value.email && userData.password === form.value.password){
        localStorage.setItem('username', userData.username)
        console.log(pre)
        this.router.navigate([pre]);
        window.location.reload()
       }
       else{
           return
       }
    }
}