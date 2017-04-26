import { Component, OnInit } from '@angular/core';
import { ReceiptAccountService } from './receipt-account.service';

@Component({
    templateUrl: './receipt-accounts.html',
    styleUrls: ['receipt-accounts.scss']
})
export class ReceiptAccountsComponent implements OnInit {

    private accountList = [ ];

    constructor(private recAcc: ReceiptAccountService) {}

    ngOnInit() {
        this.recAcc.getReceiptAccount()
            .subscribe(resp => this.accountList = resp);
    }

}