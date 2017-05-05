import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TransactionHistoryService {

    constructor(private http: Http) {

    }

    public getTransactionHistory() {
        return this.http.post('/fx/service/money/transactionHistory', {})
                .map(resp => {
                    return resp.json();
                });
    }

}