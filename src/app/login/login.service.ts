import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    isLoggedIn: boolean = false;

    isUserAuthenticated(): boolean {
        return this.isLoggedIn;
    }
}