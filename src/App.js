import { MissionUtils } from '@woowacourse/mission-utils';
import { checkValid, findCustomDiv, splitString } from './utils.js';
import { DEFAULT_DELI, ERROR, OUTPUT_STRING, PLZ_INPUT_STRING } from './constants.js';

class App {
  async run() {
    while (true) {
      try {
        let input = await MissionUtils.Console.readLineAsync(PLZ_INPUT_STRING);
        if (!input) break;
        let customString = null;
        if (input[0] === '/') {
          const cs = findCustomDiv(input);
          if (!cs) {
            // 예외처리
            throw new Error(ERROR.WRONG_CUSTOM_DELI);
          } else {
            [customString, input] = cs;
          }
        }

        const inputArr = splitString(input, [...DEFAULT_DELI, customString]);

        checkValid(inputArr);

        MissionUtils.Console.print(OUTPUT_STRING + inputArr.reduce((acc, cur) => acc + +cur, 0));
      } catch (e) {
        MissionUtils.Console.print(e.message);
        throw new Error(e);
      }
    }
  }
}

export default App;
