import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticationService {

    _isUserLoggegIn = false;
    _userDetails = {};

    public get isUserLoggegIn() {
        return this._isUserLoggegIn;
    }

    public get userDetails() {
        return this._userDetails;
    }

    constructor(private http: Http) {
    }

    public login(userName:string, password: string) {
        return this.http.get(`assets/login.json?userName=${userName}&password=${password}`)
                .map(resp => {
                    let json = resp.json();
                    if (json.success) {
                        this._isUserLoggegIn = true;
                        this._userDetails = json;
                    }
                    return json;
                });
    }

    public logout() {
        this._isUserLoggegIn = false;
        this._userDetails = {};
    }

}