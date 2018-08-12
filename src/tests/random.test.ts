import {random} from '../../src';

describe('random', () => {
  it('returns a number between min and max', () => {
    let withinRange = true;
    for (let i = 0; i < 500; i++) {
      const randomNumber = random(1, 5);
      if (randomNumber > 5 || randomNumber < 1) {
        withinRange = false;
        break;
      }
    }
    expect(withinRange).toBe(true);
  });
});
