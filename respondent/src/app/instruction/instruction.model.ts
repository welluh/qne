import { Option } from './instruction-option.model'

export class Instruction{
  uuid: String;
  type: String;
  title: String;
  description: String;

  constructor(public options: Array<Option>){
    this.options = options;
  }
}

