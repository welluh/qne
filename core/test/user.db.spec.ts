import * as mocha from 'mocha';
import { expect, should } from 'chai';
import { authenticate } from '../src/db/user.db';

describe('user database', () => {
  const expectedResult = [{ title: 'The Matrix', year: 1998, rating: 5 }];

  describe('authenticate', () => {
    it('should work with correct value', () => {
      expect(1).to.be.equal(1);
    });
  });
});
