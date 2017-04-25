import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './review-approve.html',
    styleUrls: ['review-approve.scss']
})
export class ReviewApproveComponent implements OnInit {

    private transList = [
        { trNo: 1001, payAcc: 11233, sentAmt: 123456, rate: 65.5, recAccNum: 2321315464, recAmt: 564456455, status: 'Approved', createdOn: '1-Jan-2016', approveRejected: '1-Jan-2016' },
        { trNo: 1001, payAcc: 11233, sentAmt: 123456, rate: 65.5, recAccNum: 2321315464, recAmt: 564456455, status: 'Approved', createdOn: '1-Jan-2016', approveRejected: '1-Jan-2016' },
        { trNo: 1001, payAcc: 11233, sentAmt: 123456, rate: 65.5, recAccNum: 2321315464, recAmt: 564456455, status: 'Approved', createdOn: '1-Jan-2016', approveRejected: '1-Jan-2016' },
        { trNo: 1001, payAcc: 11233, sentAmt: 123456, rate: 65.5, recAccNum: 2321315464, recAmt: 564456455, status: 'Approved', createdOn: '1-Jan-2016', approveRejected: '1-Jan-2016' },
        { trNo: 1001, payAcc: 11233, sentAmt: 123456, rate: 65.5, recAccNum: 2321315464, recAmt: 564456455, status: 'Approved', createdOn: '1-Jan-2016', approveRejected: '1-Jan-2016' },
        { trNo: 1001, payAcc: 11233, sentAmt: 123456, rate: 65.5, recAccNum: 2321315464, recAmt: 564456455, status: 'Approved', createdOn: '1-Jan-2016', approveRejected: '1-Jan-2016' },
        { trNo: 1001, payAcc: 11233, sentAmt: 123456, rate: 65.5, recAccNum: 2321315464, recAmt: 564456455, status: 'Approved', createdOn: '1-Jan-2016', approveRejected: '1-Jan-2016' },
        { trNo: 1001, payAcc: 11233, sentAmt: 123456, rate: 65.5, recAccNum: 2321315464, recAmt: 564456455, status: 'Approved', createdOn: '1-Jan-2016', approveRejected: '1-Jan-2016' },
        { trNo: 1001, payAcc: 11233, sentAmt: 123456, rate: 65.5, recAccNum: 2321315464, recAmt: 564456455, status: 'Approved', createdOn: '1-Jan-2016', approveRejected: '1-Jan-2016' },
        { trNo: 1001, payAcc: 11233, sentAmt: 123456, rate: 65.5, recAccNum: 2321315464, recAmt: 564456455, status: 'Approved', createdOn: '1-Jan-2016', approveRejected: '1-Jan-2016' },
        { trNo: 1001, payAcc: 11233, sentAmt: 123456, rate: 65.5, recAccNum: 2321315464, recAmt: 564456455, status: 'Approved', createdOn: '1-Jan-2016', approveRejected: '1-Jan-2016' }
    ];

    ngOnInit() {

    }

}