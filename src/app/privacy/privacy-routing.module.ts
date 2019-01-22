import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './privacy.component';
import { TermsComponent } from './terms/terms.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PolicyComponent } from './policy/policy.component';

const privacyRoutes:Routes = [
{path:'', component:PrivacyComponent, children:[
    {path:'terms', component:TermsComponent},
    {path:'disclaimer', component:DisclaimerComponent},
    {path:'policy', component:PolicyComponent}
]}
]

@NgModule({
    imports:[
        RouterModule.forChild(privacyRoutes)
    ],
    exports:[RouterModule]
})

export class PrivacyRoutingModule{}