import { Component} from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';

@Component({
  selector: 'my-questions',
  providers: [QuestionnaireService],
  template: `
    <div>{{questions}}</div>
`
})

export class QuestionnaireComponent{
  componentName: 'QuestionnaireComponent';
  questions: any;
  constructor(private _questionnaireService: QuestionnaireService){
    this.questions = _questionnaireService.getQuestions();
  }
}
