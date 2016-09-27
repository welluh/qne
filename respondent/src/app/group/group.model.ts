import { QuestionElement } from '../element/element.model'

export class QuestionGroup {
  type: String;
  action: String;

  constructor(private elements: Array<QuestionElement>){
    this.elements = elements;
  }
}
