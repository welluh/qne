import { Component, OnInit } from '@angular/core';

import { QuestionService } from './question.service';
import { Question } from './question';

@Component({
  selector: 'questionnaire',
  providers: [QuestionService],
  template: `
    <div>{{questions}}</div>
`
})

export class QuestionComponent implements OnInit {
  componentName: 'QuestionComponent';
  questions: Question[];
  mode = 'Observable';

  constructor(private _questionService: QuestionService){

  }

  ngOnInit(): void {
    this._questionService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }
}
