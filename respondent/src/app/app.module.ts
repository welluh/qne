import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionnaireService } from './questionnaire.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    QuestionnaireComponent
  ],
  providers: [
      QuestionnaireService
  ],
  bootstrap: [
    AppComponent,
    QuestionnaireComponent
  ]
})

export class AppModule { }
