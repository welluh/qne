import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HttpModule } from '@angular/http';



import { routing, appRoutingProviders } from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    QuestionnaireComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent, QuestionnaireComponent ]
})

export class AppModule { }
