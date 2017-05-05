import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { global } from '../global';

@Injectable()
export class TransactionHistoryService {

    constructor(private http: Http) {

    }

    public getTransactionHistory() {
        return this.http.post(global.CONTEXT + 'rest/service/money/transactionHistory', {})
                .map(resp => {
                    return resp.json();
                });
    }

}