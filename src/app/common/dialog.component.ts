import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
    selector: 'dialog1',
    template: `
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
        <button type="button" md-raised-button 
            (click)="dialogRef.close(true)">OK</button>
        <button *ngIf="!isInfo" type="button" md-button 
            (click)="dialogRef.close()">Cancel</button>
    `,
})
export class Dialog {
    public title: string;
    public message: string;
    public isInfo: boolean;
    constructor(public dialogRef: MdDialogRef<Dialog>) { }
}