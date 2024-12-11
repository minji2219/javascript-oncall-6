import {Console} from '@woowacourse/mission-utils';
import {Date} from './Date.js';
import {Worker} from './Worker.js';

const InputView = {
  worker: {weekday: [], weekend: []},
  async readDate() {
    const input = await Console.readLineAsync('비상 근무를 배정할 월과 시작 요일을 입력하세요> ');
    try {
      const date = new Date(input);
      return date.date;
    } catch (e) {
      Console.print(e.message);
      return await this.readDate();
    }
  },
  async readWeekDayWork() {
    const input = await Console.readLineAsync('평일 비상 근무 순번대로 사원 닉네임을 입력하세요>');
    try {
      const worker = new Worker(input);
      this.worker.weekday = worker.workers;
      await this.readWeekendWork();
    } catch (e) {
      Console.print(e.message);
      return await this.readWeekDayWork();
    }
  },
  async readWeekendWork() {
    const input = await Console.readLineAsync('휴일 비상 근무 순번대로 사원 닉네임을 입력하세요>');
    try {
      const worker = new Worker(input);
      this.worker.weekend = worker.workers;
    } catch (e) {
      this.worker.weekday = [];
      Console.print(e.message);
      return await this.readWeekDayWork();
    }
  },
};
export default InputView;
