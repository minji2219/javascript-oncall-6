import {Console} from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import {Assigning} from './Assigning.js';

class App {
  async run() {
    const date = await InputView.readDate();
    await InputView.readWeekDayWork();
    new Assigning(date, InputView.worker);
  }
}

export default App;
