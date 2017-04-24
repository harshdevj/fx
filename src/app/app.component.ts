import { Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav;

  constructor(private appService: AppService, private router: Router) {
  }

  ngOnInit() {
    this.appService.sidenav = this.sidenav;
  }

  nav(route) {
        this.router.navigateByUrl(`/${route}`);
    }

}
