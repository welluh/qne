import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { QuestionService } from './question.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  providers: [
      QuestionService
  ],
  bootstrap: [ 
    AppComponent, 
    QuestionComponent 
  ]
})

export class AppModule { }
