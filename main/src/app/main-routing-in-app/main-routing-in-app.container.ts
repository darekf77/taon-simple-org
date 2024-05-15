//#region @browser
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { _ } from 'tnp-core/src';
import { myOrgProj } from '@firedev-simple-org/third/src'

@Component({
  selector: 'app-main-routing-in-app',
  templateUrl: './main-routing-in-app.container.html',
  styleUrls: ['./main-routing-in-app.container.scss']
})
export class MainRoutingInAppContainer implements OnInit {

  // @Input() MainRoutingInApp = MainRoutingInApp;
  // mainRoutingInApp$ = this.MainRoutingInApp.ctrl.getAll().received.observable.pipe(map(data => {
  //   return data.body.json;
  // }))

  myId: number;

  @Input({
    required: false
  })
  set id(v: string) {
    this.myId = Number(v);
  }

  constructor() { }

  ngOnInit() {
  }

}
//#endregion
