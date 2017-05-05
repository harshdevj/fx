import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as jQuery from 'jquery';
import { AppService } from '../app.service';
import { AuthenticationService } from '../common/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['login.scss'],
    //encapsulation: ViewEncapsulation.Native
})
export class LoginComponent implements OnInit {

    eMail = '';
    pwd = '';
    error = '';

    constructor(private appService: AppService, public auth: AuthenticationService, private router: Router) {
    }

    ngOnInit() {
        this.eMail = '';
        this.pwd = '';
        this.error = '';

        jQuery('input[type="submit"]').mousedown(function () {
            jQuery(this).css('background', '#2ecc71');
        });
        jQuery('input[type="submit"]').mouseup(function () {
            jQuery(this).css('background', '#1abc9c');
        });

        jQuery('#loginform').click(function () {
            jQuery('.login').fadeToggle('slow');
            jQuery(this).toggleClass('green');
        });
        jQuery('#registerform').click(function () {
            jQuery('.register').fadeToggle('slow');
            jQuery(this).toggleClass('green');
        });

        jQuery(document).mouseup(function (e) {
            var loginContainer = jQuery(".login"),
                registerContainer = jQuery(".register");

            if (!loginContainer.is(e.target)
                && loginContainer.has(e.target).length === 0) {
                loginContainer.hide();
                jQuery('#loginform').removeClass('green');
            }
            if (!registerContainer.is(e.target)
                && registerContainer.has(e.target).length === 0) {
                registerContainer.hide();
                jQuery('#registerform').removeClass('green');
            }
        });
    }

    login(email, password) {
        this.auth.login(email, password)
            .subscribe(resp => {
                //this.eMail = '';
                //this.pwd = '';
                if (resp.success) {
                    this.toggleNav();
                } else {
                    this.error = resp.errorMessage;
                }
            });
    }

    register(fName, lName, rEmail, rPwd) {
        this.auth.register(fName, lName, rEmail, rPwd)
            .subscribe(resp => {
                //this.eMail = '';
                //this.pwd = '';
                if (resp.success) {
                    this.toggleNav();
                } else {
                    this.error = resp.errorMessage;
                }
            })
    }

    toggleNav() {
        this.appService.toggle();
    }

}