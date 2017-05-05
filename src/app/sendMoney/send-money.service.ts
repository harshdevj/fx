import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { global } from '../global';

@Injectable()
export class SendMoneyService {

    constructor(private http: Http) {
    }

    getSendMoneyData() {
        return this.http.post(global.CONTEXT + 'rest/service/money/getMoneyData', {})
                .map(resp => {
                    return resp.json();
                });
    }

    sendMoney(rec) {
        return this.http.post(global.CONTEXT + 'rest/service/money/sendMoney', {
            requestedUserId: rec.userId,
            payAccount: rec.paymentAc,
            recAccount: rec.receiptAc,
            sendAmt: rec.amount,
            currency: Object.keys(rec.currency)[0],
            recAmt: rec.recAmt,
            rate: rec.currency[Object.keys(rec.currency)[0]]
        })
                .map(resp => {
                    return resp.json();
                });
    }

}