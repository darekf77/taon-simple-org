//#region @browser
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './lazy.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent,
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
  declarations: [LazyComponent],
})
export class LazyModule { }
//#endregion