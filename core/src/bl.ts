import QneOptions from './QneOptions';
import Questionnaire from './domain/Questionnaire';

export interface BL{
  getQuestionnaires(): Promise<[Questionnaire]>;
}
export function initializeBl(opts: QneOptions): BL {
  async function getQuestionnaires(): Promise<[Questionnaire]> {
    return new Promise<[Questionnaire]>((resolve, reject) => {
      const test = new Questionnaire('TEST_UUID', 1, 2);
      resolve([test]);
    })
  }
  return {
    getQuestionnaires
  }
}
