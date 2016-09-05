import Opts from './QneOptions';
import {initializeBl, BL} from './bl';
import Questionnaire from './domain/Questionnaire';
import Info from './domain/Info';

// TODO: Generate schemas from the classes in the domain folder and use AJV to validate them
// import * as ajv from 'ajv';
//const validateQuestionnaire = ajv().compile(myJsonSchema);
//const validateResponses = ajv().compile(myJsonSchema);

export class QneOptions extends Opts{};

export interface QneCore{
  getRoot(): Promise<Info>;
  getQuestionnaires(): Promise<[Questionnaire]>;
}

export function initializeQneCore(opts: QneOptions) {
  const bl: BL = initializeBl(opts);

  async function getRoot() {
    let info: Info = await bl.getRoot();
    return info;
  }

  async function getQuestionnaires() {
    let questionnaires: [Questionnaire] = await bl.getQuestionnaires();
    return questionnaires;
  }

  return {
    getRoot,
    getQuestionnaires
  };
}

