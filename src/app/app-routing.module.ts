import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanWizardComponent } from './loan-wizard/loan-wizard.component';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {path: 'loan-wizard', component: LoanWizardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '!' },
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class AppRoutingModule { }
