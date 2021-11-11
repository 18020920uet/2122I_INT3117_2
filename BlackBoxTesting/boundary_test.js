const { predictAction, mood, action } = require('./index.js');
const assert = require('assert');

describe('Boundary test predictAction', () => {
  before(() => console.log('\n---Start---\n'));

  it('#1: nomX, nomY, nomZ', () => {
    let status = mood.STABLE;
    let beforeMidnight = Math.round(0.5) == 1;
    let point = 500;
    const expectedResult = action.PLAY_AGAIN;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#2: minX, nomY, nomZ', () => {
    let status = mood.BORED;
    let beforeMidnight = Math.round(0.5) == 1;
    let point = 500;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#3: minX+, nomY, nomZ', () => {
    let status = mood.STABLE;
    let beforeMidnight = Math.round(0.5) == 1;
    let point = 500;
    const expectedResult = action.PLAY_AGAIN;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#4: maxX-, nomY, nomZ', () => {
    let status = mood.STABLE;
    let beforeMidnight = Math.round(0.5) == 1;
    let point = 500;
    const expectedResult = action.PLAY_AGAIN;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#5: maxX, nomY, nomZ', () => {
    let status = mood.STABLE;
    let beforeMidnight = Math.round(0.5) == 1;
    let point = 500;
    const expectedResult = action.PLAY_AGAIN;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#6: nomX, nomY, minZ', () => {
    let status = mood.STABLE;
    let beforeMidnight = Math.round(0.5) == 1;
    let point = 0;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#7: nomX, nomY, minZ+', () => {
    let status = mood.STABLE;
    let beforeMidnight = Math.round(0.5) == 1;
    let point = 1;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#8: nomX, nomY, maxZ-', () => {
    let status = mood.STABLE;
    let beforeMidnight = Math.round(0.5) == 1;
    let point = 999;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#9: nomX, nomY, maxZ', () => {
    let status = mood.STABLE;
    let beforeMidnight = Math.round(0.5) == 1;
    let point = 1000;
    const expectedResult = action.WRITE_REVIEW;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#10: nomX, minY, nomZ', () => {
    let status = mood.STABLE;
    let beforeMidnight = false;
    let point = 500;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#11: nomX, minY+, nomZ', () => {
    let status = mood.STABLE;
    let beforeMidnight = false;
    let point = 500;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#12: nomX, maxY-, nomZ', () => {
    let status = mood.STABLE;
    let beforeMidnight = true;
    let point = 500;
    const expectedResult = action.PLAY_AGAIN;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#13: nomX, maxY+, nomZ', () => {
    let status = mood.STABLE;
    let beforeMidnight = true;
    let point = 500;
    const expectedResult = action.PLAY_AGAIN;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  after(() => console.log('Completed'));
});
