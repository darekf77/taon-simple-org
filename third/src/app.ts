//#region @notForNpm
import { Helpers } from 'tnp-core/src';
//#region @browser
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-isomorphic-lib-v4',
  template: 'hello from isomorphic-lib-v4',
  styles: [` body { margin: 0px !important; } `],
})
export class IsomorphicLibV4Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@NgModule({
  imports: [],
  exports: [IsomorphicLibV4Component],
  declarations: [IsomorphicLibV4Component],
  providers: [],
})
export class IsomorphicLibV4Module { }
//#endregion


async function start(port: number) {
  await Helpers.wait(3)
  console.log('hello world');
  process.stdin.resume()
}

export default start;



//#endregion
