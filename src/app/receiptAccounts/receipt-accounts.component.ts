import { Component, OnInit } from '@angular/core';
import { ReceiptAccountService } from './receipt-account.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Dialog } from '../common/dialog.component';

@Component({
    templateUrl: './receipt-accounts.html',
    styleUrls: ['receipt-accounts.scss']
})
export class ReceiptAccountsComponent implements OnInit {

    accountList = [];
    dialogRef: MdDialogRef<any>;

    constructor(private recAcc: ReceiptAccountService, public dialog: MdDialog) { }

    ngOnInit() {
        this.recAcc.getReceiptAccount()
            .subscribe(resp => this.accountList = resp);
    }

    addBankAcc(values) {
        this.recAcc.addBankAcc(values)
            .subscribe(resp => {
                if (resp.success) {
                    this.recAcc.getReceiptAccount()
                        .subscribe(resp => this.accountList = resp);
                } else {
                    this.dialogRef = this.dialog.open(Dialog);
                    this.dialogRef.componentInstance.title = "Error";
                    this.dialogRef.componentInstance.message = "Please enter unique account number.";
                    this.dialogRef.componentInstance.isInfo = true;
                }
            });
    }

}