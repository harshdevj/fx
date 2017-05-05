import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SendMoneyService {

    constructor(private http: Http) {
    }

    getSendMoneyData() {
        return this.http.post('/fx/service/money/getMoneyData', {})
                .map(resp => {
                    return resp.json();
                });
    }

    sendMoney(rec) {
        return this.http.post('/fx/service/money/sendMoney', {
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