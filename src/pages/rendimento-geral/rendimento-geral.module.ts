import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RendimentoGeralPage } from './rendimento-geral';

@NgModule({
  declarations: [
    RendimentoGeralPage,
  ],
  imports: [
    IonicPageModule.forChild(RendimentoGeralPage),
  ],
})
export class RendimentoGeralPageModule {}
