'use strict';

var chakram = require('chakram'),
    expect = chakram.expect;

describe('qne server API', () => {
  it("should return valid values from GET /v1/questionnaires", function () {
    var questionnairesPromise = chakram.get("http://localhost:3000/v1/questionnaires");
    
    // TODO: Use something like this when JSON is returned from the server
    //return expect(questionnaires).to.have.json('with[0].content', questionnaires);    

    return questionnairesPromise.then(function(response){
      expect(JSON.stringify(response.body)).to.equal('[{"uuid":"TEST_UUID","created":1,"modified":2}]');
    });
  });
});
