import { Component} from '@angular/core';
import { QuestionService } from './app.question.service';

@Component({
  selector: 'my-questions',
  providers: [QuestionService],
  template: `
    <div>{{questions}}</div>
`
})

export class QuestionComponent{
  componentName: 'QuestionComponent';
  questions: any;
  constructor(private _questionService: QuestionService){
    this.questions = _questionService.getQuestions();
  }
}
