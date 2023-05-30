//#region @browser
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {
  handlers: Subscription[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.handlers.forEach(h => h.unsubscribe());
  }

}
//#endregion