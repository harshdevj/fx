import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PaymentAmountService {

    constructor(private http: Http) {
        
    }

    getPaymentAmount() {
        return this.http.get(`assets/paymentAmount.json`)
            .map(resp => {
                let json = resp.json();
                return json;
            });
    }

}