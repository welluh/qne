import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuestionComponent } from './app.question.component';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  bootstrap: [ AppComponent, QuestionComponent ]
})

export class AppModule { }
