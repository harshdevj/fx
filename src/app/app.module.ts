import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ReceiptAccountsComponent } from './receiptAccounts/receipt-accounts.component';
import { PaymentAmountComponent } from './paymentAmount/payment-amount.component';
import { SendMoneyComponent } from './sendMoney/send-money.component';
import { TransactionHistoryComponent } from './transactionHistory/transaction-history.component';
import { ReviewApproveComponent } from './reviewApprove/review-approve.component';
import { AuthenticationService } from './common/authentication.service';
import { AppComponent } from './app.component';
import { TransactionHistoryService } from './transactionHistory/trans-history.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login/login.service';
import { PageNotFoundComponent } from './common/not-found.component';
import { IndexComponent } from './index/index.component';
import { AppService } from './app.service';
import { ReceiptAccountService } from './receiptAccounts/receipt-account.service';
import { PaymentAmountService } from './paymentAmount/payment-amount.service';
import { ReviewApproveService } from './reviewApprove/review-approve.service';

@Injectable()
export class CanActivateRoute implements CanActivate {
  constructor(private router: Router, private auth: AuthenticationService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isUserLoggegIn) {
        return true;
    }
    this.router.navigate(['/home']);
  }
}

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent, canActivate: [CanActivateRoute] },
  { path: 'receiptAccounts', component: ReceiptAccountsComponent, canActivate: [CanActivateRoute] },
  { path: 'paymentAmount', component: PaymentAmountComponent, canActivate: [CanActivateRoute] },
  { path: 'sendMoney', component: SendMoneyComponent, canActivate: [CanActivateRoute] },
  { path: 'transactionHistory', component: TransactionHistoryComponent, canActivate: [CanActivateRoute] },
  { path: 'reviewApprove', component: ReviewApproveComponent, canActivate: [CanActivateRoute] },
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
  providers: [LoginService, AppService, AuthenticationService, CanActivateRoute, TransactionHistoryService,
        ReceiptAccountService, PaymentAmountService, ReviewApproveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

