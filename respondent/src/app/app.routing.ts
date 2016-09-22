import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component'

/*
App routing.
Still W.I.P.
*/


//Routing to questionnaire by id
const appRoutes: Routes = [
  {
    path: ':questionnaire_id',
    component: QuestionnaireComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
