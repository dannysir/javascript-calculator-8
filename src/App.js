import { MissionUtils } from '@woowacourse/mission-utils';
import { checkValid, ERROR_STR, findCustomDiv, splitString } from './utils.js';

class App {
  async run() {
    while (true) {
      try {
        let input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
        if (!input || input === 'n') break;
        let customString = null;
        if (input[0] === '/') {
          const cs = findCustomDiv(input);
          if (!cs) {
            // 예외처리
            throw new Error(`${ERROR_STR} 잘못된 커스텀 문자열 입력입니다.`);
          } else {
            [customString, input] = cs;
          }
        }

        const inputArr = splitString(input, [',', ':', customString]);

        checkValid(inputArr);

        const OUTPUT_STRING = '결과 : ';
        MissionUtils.Console.print(OUTPUT_STRING + inputArr.reduce((acc, cur) => acc + +cur, 0));
      } catch (e) {
        MissionUtils.Console.print(e.message);
        throw new Error(e);
      }
    }
  }
}

export default App;
