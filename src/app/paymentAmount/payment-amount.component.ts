import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './payment-amount.html',
    styleUrls: ['payment-amount.scss']
})
export class PaymentAmountComponent implements OnInit {

    private accountList = [
        { srNo: 1, accName: 'Manas', accNum: 123, accType: 'Checking', routingNum: 1213123 },
        { srNo: 2, accName: 'Lipsa', accNum: 345, accType: 'Saving', routingNum: 43535435 },
        { srNo: 3, accName: 'Rajesh', accNum: 34535, accType: 'Saving', routingNum: 435345 },
        { srNo: 4, accName: 'Prem', accNum: 567657, accType: 'Checking', routingNum: 34535 },
        { srNo: 5, accName: 'Jayush', accNum: 56575, accType: 'Saving', routingNum: 345354 },
    ];

    ngOnInit() {

    }

}