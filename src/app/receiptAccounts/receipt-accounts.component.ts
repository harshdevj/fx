import { Component, OnInit } from '@angular/core';
import { ReceiptAccountService } from './receipt-account.service';

@Component({
    templateUrl: './receipt-accounts.html',
    styleUrls: ['receipt-accounts.scss']
})
export class ReceiptAccountsComponent implements OnInit {

    accountList = [];

    constructor(private recAcc: ReceiptAccountService) { }

    ngOnInit() {
        this.recAcc.getReceiptAccount()
            .subscribe(resp => this.accountList = resp);
    }

    addBankAcc(values) {
        this.recAcc.addBankAcc(values)
            .subscribe(resp => {
                this.recAcc.getReceiptAccount()
                    .subscribe(resp => this.accountList = resp);
            });
    }

}