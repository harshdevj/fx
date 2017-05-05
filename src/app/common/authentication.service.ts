import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticationService {

    _isUserLoggegIn = false;
    _userDetails: any = {
        entitlement: []
    };

    public get isUserLoggegIn() {
        return this._isUserLoggegIn;
    }

    public get userDetails() {
        return this._userDetails;
    }

    constructor(private http: Http) {
    }

    public login(userName:string, password: string) {
        return this.http.post('/fx/service/user/login', {email: userName, userPwd: password})
                .map(resp => {
                    let json = resp.json();
                    if (json.success) {
                        this._isUserLoggegIn = true;
                        this._userDetails = json;
                    }
                    return json;
                });
    }

    public register(fName, lName, rEmail, rPwd) {
        return this.http.post('/fx/service/user/register', { email: rEmail, name: (fName + ' ' + lName), password: rPwd, userType: 'user' })
                .map(resp => {
                    return resp.json();
                });
    }

    public logout() {
        this._isUserLoggegIn = false;
        this._userDetails = {
            entitlement: []
        };
    }

}