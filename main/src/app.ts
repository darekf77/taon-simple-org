//#region imports
import { Firedev } from 'firedev/src';
import { _ } from 'tnp-core/src';
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
    loadChildren: () => import('./app/main-routing-in-app/main-routing-in-app.container.module')
      .then(m => m.MainRoutingInAppContainerModule),
  },
];
//#endregion

//#region main component
@Component({
  selector: 'app-main',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.scss'],
  templateUrl: './app.html',
})
export class MainComponent implements OnInit {
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
  exports: [MainComponent],
  declarations: [MainComponent],
  providers: [],
})
export class MainModule { }
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
    // context.node.app.get('/hello', (req, res) => {
    //   res.send('Hellossasdaasasddsddsd main')
    // })
  }
  //#endregion
}
//#endregion

export default start;
