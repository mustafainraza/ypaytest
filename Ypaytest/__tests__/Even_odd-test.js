import React from 'react';
import renderer from 'react-test-renderer';
import {checkNumber} from '../src/Screens/Task1';

describe('checkNumber', () => {
  it('should return "Number is Even" when the number is even', () => {
    expect(checkNumber(4)).toBe('Number is Even');
    expect(checkNumber(0)).toBe('Number is Even');
    expect(checkNumber(-2)).toBe('Number is Even');
  });

  it('should return "Number is Odd" when the number is odd', () => {
    expect(checkNumber(3)).toBe('Number is Odd');
    expect(checkNumber(7)).toBe('Number is Odd');
    expect(checkNumber(-1)).toBe('Number is Odd');
  });
});
