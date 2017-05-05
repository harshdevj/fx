import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { global } from '../global';

@Injectable()
export class ReceiptAccountService {

    constructor(private http: Http) {
        
    }

    public getReceiptAccount() {
        return this.http.post(global.CONTEXT + 'rest/service/recipient/getAccounts', {})
                .map(resp => {
                    return resp.json();
                });
    }

    addBankAcc(values) {
        return this.http.post(global.CONTEXT + 'rest/service/recipient/addRecipient', {accountName: values.accName, accountNumber: values.accNum, accountType: values.accType, routingNumber: values.rNum})
                .map(resp => {
                    return resp.json();
                });
    }

}