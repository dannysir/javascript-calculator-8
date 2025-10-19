import { ERROR } from './constants.js';

export const findCustomDiv = (input) => {
  if (input[0] === '/' && input[1] === '/') {
    const splitCustomInput = input.slice(2).split('\\n');
    if (splitCustomInput.length === 2) {
      return splitCustomInput;
    } else return null;
  } else return null;
};

export const splitString = (input, div) => {
  let result = [input];

  for (const splitStr of div) {
    const tmp = [];

    for (const targetStr of result) {
      tmp.push(...targetStr.split(splitStr));
    }
    result = tmp;
  }

  return result;
};

export const checkValid = (arr) => {
  for (const num of arr) {
    if (num === '' || num.trim() !== num) {
      throw new Error(ERROR.EMPTY_STRING);
    }
    if (isNaN(num)) {
      throw new Error(ERROR.NAN);
    }
    if (Number(num) < 0) {
      throw new Error(ERROR.NEGATIVE_NUM);
    }
  }
};
