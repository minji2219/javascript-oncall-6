import {Console} from '@woowacourse/mission-utils';
import {Date} from './Date.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync('비상 근무를 배정할 월과 시작 요일을 입력하세요> ');
    try {
      const date = new Date(input);
      Console.print(date.date);
    } catch (e) {
      Console.print(e.message);
      return await this.readDate();
    }
  },
};
export default InputView;
