import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SendMoneyService {

    constructor(private http: Http) {
    }

    getSendMoneyData() {
        return this.http.get(`assets/sendMoneyData.json`)
            .map(resp => {
                let json = resp.json();
                return json;
            });
    }

}