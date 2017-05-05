import { Component, OnInit } from '@angular/core';
import { ReviewApproveService } from './review-approve.service';
import { TransactionHistoryService } from '../transactionHistory/trans-history.service';
import { Dialog } from '../common/dialog.component';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    templateUrl: './review-approve.html',
    styleUrls: ['review-approve.scss']
})
export class ReviewApproveComponent implements OnInit {

    transList = [];
    dialogRef: MdDialogRef<any>;

    constructor(private revApp: ReviewApproveService, private trHist: TransactionHistoryService, public dialog: MdDialog) { }

    ngOnInit() {
        this.trHist.getTransactionHistory()
            .subscribe(resp => this.transList = resp);
    }

    approve(rec) {
        this.dialogRef = this.dialog.open(Dialog);
        this.dialogRef.componentInstance.title = "Approve";
        this.dialogRef.componentInstance.message = "Are you sure you want to approve this transaction?";

        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.revApp.approve(rec)
                .subscribe(resp => {
                    this.trHist.getTransactionHistory()
                        .subscribe(resp => this.transList = resp);
                });
            }
            this.dialogRef = null;
        });
    }

    reject(rec) {
        this.dialogRef = this.dialog.open(Dialog);
        this.dialogRef.componentInstance.title = "Reject";
        this.dialogRef.componentInstance.message = "Are you sure you want to reject this transaction?";

        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.revApp.reject(rec)
                    .subscribe(resp => {
                        this.trHist.getTransactionHistory()
                            .subscribe(resp => this.transList = resp);
                    });
            }
            this.dialogRef = null;
        });
    }

}