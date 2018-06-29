'use strict';
const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
  it('should return fizz-buzz if div by 15', function(){
    const normalCases = [
      { a: 15, expected: 'fizz-buzz' },
      { a: 45, expected: 'fizz-buzz' },
      { a: 9, expected: 'fizz' },
      { a: 12, expected: 'fizz' },
      { a: 50, expected: 'buzz' },
      { a: 55, expected: 'buzz' },
      { a: 4, expected: 4 }

    ];
    normalCases.forEach(function (input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });
  it('should raise an error if arg isn\'t an int', function(){
    const badCases = ['string', false, '5'];
    badCases.forEach(function(input){
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});