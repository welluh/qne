import { QuestionGroup } from '../group/group.model'
import { Action } from '../action/action.model'
import { Instruction } from '../instruction/instruction.model'

export class Questionnaire {
  uuid: String;
  defaultLang: String;
  title: String;
  description: String;
  submit: String;

  constructor(public instructions: Array<Instruction>, public actions: Array<Action>, public groups: Array<QuestionGroup>){
    this.instructions = instructions;
    this.actions = actions;
    this.groups = groups;
  }
}
