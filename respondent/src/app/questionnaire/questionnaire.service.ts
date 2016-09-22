import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QuestionnaireService{
  questionnaire:Array<any>;

  constructor(private http:Http){}

  getQuestions(){
    return this.http.request('../../mock.api.json')
      .map(response => response.json());
  }

  saveAnswers(){
    return 0;
  }

}
