import { NgModule} from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
    AuthComponent,
    SignupComponent,
    SigninComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ],
    exports:[]
})
export class AuthModule{}