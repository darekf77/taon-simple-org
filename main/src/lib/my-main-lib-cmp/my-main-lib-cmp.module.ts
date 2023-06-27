//#region @browser
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMainLibCmpComponent } from './my-main-lib-cmp.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MyMainLibCmpComponent],
  exports: [MyMainLibCmpComponent],
})
export class MyMainLibCmpModule { }
//#endregion