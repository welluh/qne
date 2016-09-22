import { Component, OnInit } from '@angular/core';

import { QuestionnaireService } from './questionnaire.service';
import { Questionnaire } from './questionnaire';

@Component({
  selector: 'questionnaire',
  providers: [QuestionnaireService],
  template: `
    <div *ngFor="let questionLocalized of questions.i18n">
      <h1>{{questionLocalized.title}}</h1>
      <p>{{questionLocalized.description}}</p>
    </div>
  `
})

export class QuestionnaireComponent implements OnInit {
  componentName: 'QuestionnaireComponent';
  questions: Questionnaire[] = [];
  mode = 'Observable';
  errorMessage: string;

  constructor(private _questionnaireService: QuestionnaireService){

  }

  ngOnInit(): void {
    this._getQuestions();
  }

  private _getQuestions(): void {
    this._questionnaireService.getQuestions()
      .subscribe(
        questions => this.questions = questions,
        error =>  this.errorMessage = <any>error);
  }
}