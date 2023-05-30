//#region @notForNpm

//#region @browser
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-second',
  template: 'hello from second'
})
export class SecondComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@NgModule({
  imports: [],
  exports: [SecondComponent],
  declarations: [SecondComponent],
  providers: [],
})
export class SecondModule { }
//#endregion

//#region @backend
async function start(port: number) {
  console.log('hello world from backend');
}

export default start;

//#endregion

//#endregion
