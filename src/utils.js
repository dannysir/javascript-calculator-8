import { ERROR } from './constants.js';

const findCustomDeli = (input) => {
  const splitCustomInput = input.slice(2).split('\\n');
  if (splitCustomInput.length === 2) {
    return splitCustomInput;
  } else return null;
};

export const extractDelimiterAndContent = (input) => {
  if (!input.startsWith('//')) {
    return { customDeli: null, inputContent: input };
  }

  const customDeli = findCustomDeli(input);

  if (!customDeli) {
    throw new Error(ERROR.WRONG_CUSTOM_DELI);
  }

  return {
    customDeli: customDeli[0],
    inputContent: customDeli[1],
  };
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
