import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { LoanWizardComponent } from './loan-wizard/loan-wizard.component';

@NgModule({
  imports: [BrowserModule, UpgradeModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [AppComponent, LoanWizardComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private upgrade: UpgradeModule) {}
  // ngDoBootstrap() {
  //   this.upgrade.bootstrap(document.documentElement, ['processing']);
  // }
}
