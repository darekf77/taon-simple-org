//#region imports
import { Firedev } from 'firedev';
import { _ } from 'tnp-core';
const host = 'http://localhost:4199';
//#region @browser
import { NgModule, NgZone, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
//#endregion
//#endregion

//#region @browser

//#region routes
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app/second-app-lazy/second-app-lazy.module')
      .then(m => m.SecondAppLazyModule),
  },
];
//#endregion

//#region main component
@Component({
  selector: 'app-second',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.scss'],
  templateUrl: './app.html',
})
export class SecondComponent implements OnInit {
  async ngOnInit() {

  }
}
//#endregion

//#region main module
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
      enableTracing: false,
      bindToComponentInputs: true
    }),
  ],
  exports: [SecondComponent],
  declarations: [SecondComponent],
  providers: [],
})
export class SecondModule { }
//#endregion
//#endregion

//#region firedev start function
async function start() {

  // Firedev.enableProductionMode();

  const context = await Firedev.init({
    host,
    controllers: [
      // PUT FIREDEV CONTORLLERS HERE
    ],
    entities: [
      // PUT FIREDEV ENTITIES HERE
    ],
    //#region @websql
    config: {
      type: 'better-sqlite3',
      database: 'tmp-db.sqlite',
      logging: false,
    }
    //#endregion
  });
  //#region @backend
  if (Firedev.isNode) {
    context.node.app.get('/hello', (req, res) => {
      res.send('Hello secaaond')
    })
  }
  //#endregion
}
//#endregion

export default start;
