import { Component, OnInit } from '@angular/core';
import { TransactionHistoryService } from './trans-history.service';
@Component({
    templateUrl: './transaction-history.html',
    styleUrls: ['transaction-history.scss']
})
export class TransactionHistoryComponent implements OnInit {

    transList = [];

    constructor(private trHist: TransactionHistoryService) {
    }

    ngOnInit() {
        this.trHist.getTransactionHistory().subscribe(resp => this.transList = resp);
    }

}