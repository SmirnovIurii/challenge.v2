import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinishedPage } from './finished';

@NgModule({
  declarations: [
    FinishedPage,
  ],
  imports: [
    IonicPageModule.forChild(FinishedPage),
  ],
})
export class FinishedPageModule {}
