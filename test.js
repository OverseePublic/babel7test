import {expect} from 'chai';

describe('test', () => {
  it('runs async', async() => {
    await new Promise((r) => r(1));
    expect(true).to.be.true;
  });
})