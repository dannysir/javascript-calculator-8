export const ERROR_STR = '[ERROR]';

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
      throw new Error('[ERROR] 빈 문자열 혹은 공백은 허용되지 않습니다.');
    }
    if (isNaN(num)) {
      throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다.');
    }
    if (Number(num) < 0) {
      throw new Error('[ERROR] 음수는 허용되지 않습니다.');
    }
  }
};
