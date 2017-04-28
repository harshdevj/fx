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
        return this.http.post('assets/approveReject.json', rec)
            .map(resp => {
                let json = resp.json();
                return json;
            });
    }

    reject(rec) {
        return this.http.post('assets/approveReject.json', rec)
            .map(resp => {
                let json = resp.json();
                return json;
            });
    }

}