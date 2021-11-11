const { predictAction, mood, action } = require('./index.js');
const assert = require('assert');

describe('Decision table test predictAction', () => {
  before(() => console.log('\n---Start---\n'));

  it('#1', () => {
    let status = mood.BORED;
    let beforeMidnight = false;
    let point = -10;
    assert.throws(() => predictAction(status, beforeMidnight, point), Error);
  });

  it('#2', () => {
    let status = mood.BORED;
    let beforeMidnight = false;
    let point = 50;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#3', () => {
    let status = mood.BORED;
    let beforeMidnight = false;
    let point = 420;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#4', () => {
    let status = mood.BORED;
    let beforeMidnight = false;
    let point = 997;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#5', () => {
    let status = mood.BORED;
    let beforeMidnight = false;
    let point = 1000;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#6', () => {
    let status = mood.BORED;
    let beforeMidnight = false;
    let point = 2000;
    assert.throws(() => predictAction(status, beforeMidnight, point), Error);
  });

  it('#7', () => {
    let status = mood.BORED;
    let beforeMidnight = true;
    let point = -100;
    assert.throws(() => predictAction(status, beforeMidnight, point), Error);
  });

  it('#8', () => {
    let status = mood.BORED;
    let beforeMidnight = true;
    let point = 27;
    const expectedResult = action.DELETE_GAME;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#9', () => {
    let status = mood.BORED;
    let beforeMidnight = true;
    let point = 270;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#10', () => {
    let status = mood.BORED;
    let beforeMidnight = true;
    let point = 927;
    const expectedResult = action.WATCH_MOVIE;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#11', () => {
    let status = mood.BORED;
    let beforeMidnight = true;
    let point = 1000;
    const expectedResult = action.DELETE_GAME;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#12', () => {
    let status = mood.BORED;
    let beforeMidnight = true;
    let point = 1001;
    assert.throws(() => predictAction(status, beforeMidnight, point), Error);
  });

  it('#13', () => {
    let status = mood.STABLE;
    let beforeMidnight = false;
    let point = -1;
    assert.throws(() => predictAction(status, beforeMidnight, point), Error);
  });

  it('#14', () => {
    let status = mood.STABLE;
    let beforeMidnight = false;
    let point = 48;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#15', () => {
    let status = mood.STABLE;
    let beforeMidnight = false;
    let point = 280;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#16', () => {
    let status = mood.STABLE;
    let beforeMidnight = false;
    let point = 969;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#17', () => {
    let status = mood.STABLE;
    let beforeMidnight = false;
    let point = 1000;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#18', () => {
    let status = mood.STABLE;
    let beforeMidnight = false;
    let point = 3002
    assert.throws(() => predictAction(status, beforeMidnight, point), Error);
  });

  it('#19', () => {
    let status = mood.STABLE;
    let beforeMidnight = true;
    let point = -999999
    assert.throws(() => predictAction(status, beforeMidnight, point), Error);
  });

  it('#20', () => {
    let status = mood.STABLE;
    let beforeMidnight = true;
    let point = 2;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#21', () => {
    let status = mood.STABLE;
    let beforeMidnight = true;
    let point = 200;
    const expectedResult = action.PLAY_AGAIN;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#22', () => {
    let status = mood.STABLE;
    let beforeMidnight = true;
    let point = 999;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#23', () => {
    let status = mood.STABLE;
    let beforeMidnight = true;
    let point = 1000;
    const expectedResult = action.WRITE_REVIEW;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#24', () => {
    let status = mood.STABLE;
    let beforeMidnight = true;
    let point = 6000
    assert.throws(() => predictAction(status, beforeMidnight, point), Error);
  });

  it('#25', () => {
    let status = mood.HAPPY;
    let beforeMidnight = false;
    let point = -25
    assert.throws(() => predictAction(status, beforeMidnight, point), Error);
  });

  it('#26', () => {
    let status = mood.HAPPY;
    let beforeMidnight = false;
    let point = 25;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#27', () => {
    let status = mood.HAPPY;
    let beforeMidnight = false;
    let point = 250;
    const expectedResult = action.PLAY_AGAIN;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#28', () => {
    let status = mood.HAPPY;
    let beforeMidnight = false;
    let point = 925;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#29', () => {
    let status = mood.HAPPY;
    let beforeMidnight = false;
    let point = 1000;
    const expectedResult = action.REST;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#30', () => {
    let status = mood.HAPPY;
    let beforeMidnight = false;
    let point = -20001
    assert.throws(() => predictAction(status, beforeMidnight, point), Error);
  });

  it('#31', () => {
    let status = mood.HAPPY;
    let beforeMidnight = true;
    let point = -69
    assert.throws(() => predictAction(status, beforeMidnight, point), Error);
  });

  it('#32', () => {
    let status = mood.HAPPY;
    let beforeMidnight = true;
    let point = 69;
    const expectedResult = action.PLAY_AGAIN;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#33', () => {
    let status = mood.HAPPY;
    let beforeMidnight = true;
    let point = 693;
    const expectedResult = action.PLAY_AGAIN;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#34', () => {
    let status = mood.HAPPY;
    let beforeMidnight = true;
    let point = 926;
    const expectedResult = action.READ_BOOK;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#35', () => {
    let status = mood.HAPPY;
    let beforeMidnight = true;
    let point = 1000;
    const expectedResult = action.DELETE_GAME;
    assert(predictAction(status, beforeMidnight, point), expectedResult);
  });

  it('#30', () => {
    let status = mood.HAPPY;
    let beforeMidnight = true;
    let point = 2002
    assert.throws(() => predictAction(status, beforeMidnight, point), Error);
  });

  after(() => console.log('Completed'));
});
