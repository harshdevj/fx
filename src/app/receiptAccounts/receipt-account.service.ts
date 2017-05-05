import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ReceiptAccountService {

    constructor(private http: Http) {
        
    }

    public getReceiptAccount() {
        return this.http.post('/fx/service/recipient/getAccounts', {})
                .map(resp => {
                    return resp.json();
                });
    }

    addBankAcc(values) {
        return this.http.post('/fx/service/recipient/addRecipient', {accountName: values.accName, accountNumber: values.accNum, accountType: values.accType, routingNumber: values.rNum})
                .map(resp => {
                    return resp.json();
                });
    }

}