import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { SendMoneyService } from './send-money.service';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../common/authentication.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Dialog } from '../common/dialog.component';

@Component({
    templateUrl: './send-money.html',
    styleUrls: ['send-money.scss'],
    providers: [SendMoneyService]
})
export class SendMoneyComponent implements OnInit {

    receiptAccountList = [];
    paymentAccountList = [];
    ccys = [];
    dialogRef: MdDialogRef<any>;

    constructor(private svc: SendMoneyService, public auth: AuthenticationService, public dialog: MdDialog) {
    }

    ngOnInit() {
        this.svc.getSendMoneyData()
            .subscribe(data => {
                this.receiptAccountList = data.receiptAccountList;
                this.paymentAccountList = data.paymentAccountList;
                this.ccys = data.ccys;
            });
    }

    sendMoney(values) {
        values.userId = this.auth.userDetails.userId;
        values.recAmt = values.amount * this.getValue(values.currency);
        console.info(values);
        this.svc.sendMoney(values)
            .subscribe(resp => {
                this.dialogRef = this.dialog.open(Dialog);
                if (resp.success) {
                    this.dialogRef.componentInstance.title = "Success";
                    this.dialogRef.componentInstance.message = "We are validating your transaction. Money will be sent to the receiver's account once transaction is validated. Soon you'll receive confirmation email from us.";
                    this.dialogRef.componentInstance.isInfo = true;
                } else {
                    this.dialogRef.componentInstance.title = "Error";
                    this.dialogRef.componentInstance.message = resp.errorMessage;
                    this.dialogRef.componentInstance.isInfo = true;
                }
            });
    }

    getKey(o) {
        return Object.keys(o)[0];
    }

    getValue(o) {
        return o[Object.keys(o)[0]];
    }

}