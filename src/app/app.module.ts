import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { TelaInicialPage } from '../pages/tela-inicial/tela-inicial';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { DisciplinasPage } from '../pages/disciplinas/disciplinas';
import { RendimentoGeralPage } from '../pages/rendimento-geral/rendimento-geral';
import { SobrePage } from '../pages/sobre/sobre';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TelaInicialPage,
    TarefasPage,
    DisciplinasPage,
    RendimentoGeralPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TelaInicialPage,
    TarefasPage,
    DisciplinasPage,
    RendimentoGeralPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
