//#region @browser
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondAppLazyComponent } from './second-app-lazy.component';

const routes: Routes = [
  {
    path: '',
    component: SecondAppLazyComponent,
  },
  // {
  //   path: 'anothermodulepath',
  //   loadChildren: () => import('anothermodule')
  //     .then(m => m.AnotherLazyModule),
  // },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SecondAppLazyComponent],
})
export class SecondAppLazyModule { }
//#endregion