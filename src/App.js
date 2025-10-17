import { MissionUtils } from '@woowacourse/mission-utils';
import { findCustomDiv, splitString } from './utils.js';

class App {
  async run() {
    while (true) {
      let input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      if (input === 'n') break;
      let customString = null;
      if (input[0] === '/') {
        const cs = findCustomDiv(input);
        if (!cs) {
          // 예외처리
        } else {
          [customString, input] = cs;
        }
      }

      const inputArr = splitString(input, [',', ':', customString]);

      const OUTPUT_STRING = '결과 : ';
      MissionUtils.Console.print(OUTPUT_STRING + inputArr.reduce((acc, cur) => acc + +cur, 0));
    }
  }
}

export default App;
