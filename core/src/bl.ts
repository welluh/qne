import QneOptions from './QneOptions';
import Questionnaire from './domain/Questionnaire';
import Info from './domain/Info';

export interface BL{
  getRoot(): Promise<Info>;
  getQuestionnaires(): Promise<[Questionnaire]>;
}
export function initializeBl(opts: QneOptions): BL {
  async function getRoot(): Promise<Info> {
    // TODO: Wait for database connection ready
    return new Promise<Info>((resolve, reject) => {
      const info = new Info('TEST_VERSION');
      resolve(info);
    })
  }

  async function getQuestionnaires(): Promise<[Questionnaire]> {
    return new Promise<[Questionnaire]>((resolve, reject) => {
      const test = new Questionnaire('TEST_UUID', 1, 2);
      resolve([test]);
    })
  }
  return {
    getRoot,
    getQuestionnaires
  }
}
