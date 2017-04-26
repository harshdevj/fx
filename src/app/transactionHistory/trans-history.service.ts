import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TransactionHistoryService {

    constructor(private http: Http) {

    }

    public getTransactionHistory() {
        return this.http.get(`assets/transactionHistory.json`)
            .map(resp => {
                let json = resp.json();
                return json;
            });
    }

}