import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ReceiptAccountsComponent } from './receiptAccounts/receipt-accounts.component';
import { PaymentAmountComponent } from './paymentAmount/payment-amount.component';
import { SendMoneyComponent } from './sendMoney/send-money.component';
import { TransactionHistoryComponent } from './transactionHistory/transaction-history.component';
import { ReviewApproveComponent } from './reviewApprove/review-approve.component';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login/login.service';
import { PageNotFoundComponent } from './common/not-found.component';
import { IndexComponent } from './index/index.component';
import { AppService } from './app.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'receiptAccounts', component: ReceiptAccountsComponent },
  { path: 'paymentAmount', component: PaymentAmountComponent },
  { path: 'sendMoney', component: SendMoneyComponent },
  { path: 'transactionHistory', component: TransactionHistoryComponent },
  { path: 'reviewApprove', component: ReviewApproveComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent, IndexComponent, LoginComponent, HomeComponent,
    ReceiptAccountsComponent, PaymentAmountComponent, SendMoneyComponent, TransactionHistoryComponent,
    ReviewApproveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserAnimationsModule,
    MaterialModule.forRoot()
  ],
  providers: [LoginService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

