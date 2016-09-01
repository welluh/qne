import QneOptions from './QneOptions';
import {initializeBl, BL} from './bl';
import Questionnaire from './domain/Questionnaire';

// TODO: Generate schemas from the classes in the domain folder and use AJV to validate them
// import * as ajv from 'ajv';
//const validateQuestionnaire = ajv().compile(myJsonSchema);
//const validateResponses = ajv().compile(myJsonSchema);

export interface QneCore{
  getQuestionnaires(): Promise<[Questionnaire]>;
}

export default function initializeQneCore(opts: QneOptions) {
  const bl: BL = initializeBl(opts);

  async function getQuestionnaires() {
    let questionnaires: [Questionnaire] = await bl.getQuestionnaires();
    return questionnaires;
  }

  return {
    getQuestionnaires
  };
}

