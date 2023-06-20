//#region @notForNpm

//#region @browser
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-second',
  template: 'hello from second',
  styles: [` body { margin: 0px !important; } `],
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


async function start(port: number) {
  console.log('hello world');
}

export default start;



//#endregion