import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector:'app-signup',
    templateUrl:'./signup.component.html',
    styleUrls:['./signup.component.css']
})
export class SignupComponent{

    constructor(private router:Router){}

    onSubmit(form:NgForm){
        localStorage.setItem('user', JSON.stringify(form.value));
        form.reset();
         this.router.navigate(['/auth/signin'])
    }
}