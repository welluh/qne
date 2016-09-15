import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Question } from './question';

@Injectable()
export class QuestionService {
  mode = 'Observable';
  
  constructor(private http: Http){}

  private apiUrl = 'http://localhost:3004/test-questionnaire';

  private handleError (error: any) {
    // @TODO replace with real logging     
    const errMsg = error.message 
      ? error.message 
      : error.status 
        ? `${error.status} - ${error.statusText}` 
        : 'Server error';

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getQuestions(): Observable<Question[]> { 
    return this.http.get(this.apiUrl)
      .map(response => response.json());
  }
}
