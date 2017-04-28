import { Component, OnInit } from '@angular/core';
import { PaymentAmountService } from './payment-amount.service';

@Component({
    templateUrl: './payment-amount.html',
    styleUrls: ['payment-amount.scss']
})
export class PaymentAmountComponent implements OnInit {

    accountList = [];

    constructor(private payAmt: PaymentAmountService) { }

    ngOnInit() {
        this.payAmt.getPaymentAmount()
            .subscribe(resp => this.accountList = resp);
    }

    addPayBankAcc(values) {
        this.payAmt.addPayBankAcc(values)
            .subscribe(resp => {
                this.payAmt.getPaymentAmount()
                    .subscribe(resp => this.accountList = resp);
            });
    }

}