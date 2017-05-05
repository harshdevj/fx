import { Component, OnInit } from '@angular/core';
import { PaymentAmountService } from './payment-amount.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Dialog } from '../common/dialog.component';

@Component({
    templateUrl: './payment-amount.html',
    styleUrls: ['payment-amount.scss']
})
export class PaymentAmountComponent implements OnInit {

    accountList = [];
    dialogRef: MdDialogRef<any>;

    constructor(private payAmt: PaymentAmountService, public dialog: MdDialog) { }

    ngOnInit() {
        this.payAmt.getPaymentAmount()
            .subscribe(resp => this.accountList = resp);
    }

    addPayBankAcc(values) {
        this.payAmt.addPayBankAcc(values)
            .subscribe(resp => {
                if (resp.success) {
                    this.payAmt.getPaymentAmount()
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