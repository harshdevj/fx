import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { SendMoneyService } from './send-money.service';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './send-money.html',
    styleUrls: ['send-money.scss'],
    providers: [SendMoneyService]
})
export class SendMoneyComponent implements OnInit {

    receiptAccountList = [];
    paymentAccountList = [];
    ccys = [];

    constructor(private svc: SendMoneyService) {
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
        console.info(values);
    }

    getKey(o) {
        return Object.keys(o)[0];
    }

    getValue(o) {
        return o[Object.keys(o)[0]];
    }

}