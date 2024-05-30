//#region @browser
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { _ } from 'tnp-core/src';

@Component({
  selector: 'app-second-app-lazy',
  templateUrl: './second-app-lazy.component.html',
  styleUrls: ['./second-app-lazy.component.scss'],
})
export class SecondAppLazyComponent implements OnInit {
  handlers: Subscription[] = [];
  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.handlers.forEach(h => h.unsubscribe());
  }
}
//#endregion
