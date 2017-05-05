import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ReviewApproveService {

    constructor(private http: Http) {
        
    }

    public getApproveReject() {
        return this.http.get('assets/approveReject.json')
            .map(resp => {
                let json = resp.json();
                return json;
            });
    }

    approve(rec) {
        return this.http.post('/fx/service/money/approveTransaction', rec)
                .map(resp => {
                    return resp.json();
                });
    }

    reject(rec) {
        return this.http.post('/fx/service/money/rejectTransaction', rec)
                .map(resp => {
                    return resp.json();
                });
    }

}