export const findCustomDiv = (input) => {
  if (input[0] === '/' && input[1] === '/') {
    const splitCustomInput = input.slice(2).split('\\n');
    if (splitCustomInput.length === 2) {
      return splitCustomInput;
    } else return null;
  } else return null;
};

export const splitString = (input, div) => {
  const separators = new RegExp(`[${div.join('')}]`);

  return input.split(separators);
};
