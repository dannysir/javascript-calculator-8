import { MissionUtils } from '@woowacourse/mission-utils';
import { checkValid, extractDelimiterAndContent, splitString } from './utils.js';
import { DEFAULT_DELI, OUTPUT_STRING, PLZ_INPUT_STRING } from './constants.js';

class App {
  async run() {
    while (true) {
      try {
        let input = await MissionUtils.Console.readLineAsync(PLZ_INPUT_STRING);

        if (!input) break;

        const { customDeli, inputContent } = extractDelimiterAndContent(input);
        const inputNumber = splitString(inputContent, [...DEFAULT_DELI, customDeli]);

        checkValid(inputNumber);

        MissionUtils.Console.print(OUTPUT_STRING + inputNumber.reduce((acc, cur) => acc + +cur, 0));
      } catch (e) {
        MissionUtils.Console.print(e.message);
        throw new Error(e);
      }
    }
  }
}

export default App;
