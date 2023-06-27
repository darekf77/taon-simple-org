//#region @browser
import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { _ } from 'tnp-core';

@Component({
  selector: 'app-my-main-lib-cmp',
  templateUrl: './my-main-lib-cmp.component.html',
  styleUrls: ['./my-main-lib-cmp.component.scss']
})
export class MyMainLibCmpComponent implements OnInit {
  @HostBinding('style.minHeight.px') @Input() height: number = 100;
  handlers: Subscription[] = [];
  @Output() myMainLibCmpDataChanged = new EventEmitter();
  @Input() myMainLibCmpData: any = {};

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.handlers.forEach(h => h.unsubscribe());
  }

}
//#endregion