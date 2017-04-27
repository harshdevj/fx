import { Component, OnInit } from '@angular/core';
import { ReviewApproveService } from './review-approve.service';
@Component({
    templateUrl: './review-approve.html',
    styleUrls: ['review-approve.scss']
})
export class ReviewApproveComponent implements OnInit {

    transList = [];

    constructor(private revApp: ReviewApproveService) {}

    ngOnInit() {
        this.revApp.getApproveReject()
            .subscribe(resp => this.transList = resp);
    }

}