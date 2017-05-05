import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { global } from '../global';

@Injectable()
export class PaymentAmountService {

    constructor(private http: Http) {
        
    }

    getPaymentAmount() {
        return this.http.post(global.CONTEXT + 'rest/service/payment/getPayments', {})
                .map(resp => {
                    return resp.json();
                });
    }

    addPayBankAcc(values) {
        return this.http.post(global.CONTEXT + 'rest/service/payment/addPayment', {accountName: values.accName, accountNumber: values.accNum, accountType: values.accType, routingNumber: values.rNum})
                .map(resp => {
                    return resp.json();
                });
    }

}