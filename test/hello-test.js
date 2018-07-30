/* http://www.chaijs.com/
The expect interface provides function for assertion.
The should interface extends each object with a should property for assertion.
*/
const chai = require('chai');

const expect = chai.expect;
/* eslint-disable-next-line no-unused-vars */
const should = chai.should();
const assert = chai.assert;

const hello = require('../hello.js'); // this is the module being tested

describe('Hello world test', () => {
  it('should say "hello"', (done) => {
    const name = 'joe';
    const result = hello.shortGreeting(name);
    expect(result).to.equal('hello joe');
    done();
  });
  it('should say "well hello there"', (done) => {
    const name = 'joe';
    const result = hello.longGreeting(name);
    result.should.equal('well hello there joe');
    done();
  });
  it('should say "hello"', (done) => {
    const name = 'joe';
    const result = hello.shortGreeting(name);
    assert.equal(result, 'hello joe');
    done();
  });
});
