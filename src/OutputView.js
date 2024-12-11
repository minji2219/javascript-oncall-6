import {Console} from '@woowacourse/mission-utils';

const OutputView = {
  printWork(month, date, day, worker, isHoliday = false) {
    Console.print(`${month}월 ${date}일 ${day}${isHoliday ? '(휴일)' : ''} ${worker}`);
  },
};
export default OutputView;
