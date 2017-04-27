import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    _sidenav;

    public set sidenav(value) {
        this._sidenav = value;
    }

    public get sidenav() {
        return this._sidenav;
    }

    public open() {
        this._sidenav.open();
    }

    public close() {
        this._sidenav.close();
    }

    public toggle() {
        this._sidenav.toggle();
    }
}