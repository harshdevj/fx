import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ReceiptAccountService {

    constructor(private http: Http) {
        
    }

    public getReceiptAccount() {
        return this.http.get(`assets/receiptAccount.json`)
            .map(resp => {
                let json = resp.json();
                return json;
            });
    }

    addBankAcc(values) {
        return this.http.post('addBankAcc', values)
            .map(resp => {
                let json = resp.json();
                return json;
            });
    }

}