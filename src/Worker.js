import {ERROR_MSG} from './constant/error.js';

export class Worker {
  constructor(worker) {
    this.workers = worker.split(',');
    this.validate();
  }
  validate() {
    this.validateNumber();
    this.validateNameLength();
    this.validateDuplicate();
  }

  validateNumber() {
    if (this.workers.length < 5 || this.workers.length > 35) throw new Error(ERROR_MSG.invalidInput);
  }

  validateNameLength() {
    this.workers.map((worker) => {
      if ([...worker].length > 5) throw new Error(ERROR_MSG.invalidInput);
    });
  }

  validateDuplicate() {
    let workersSet = new Set();
    this.workers.map((worker) => {
      workersSet.add(worker);
    });
    if (workersSet.size !== this.workers.length) throw new Error(ERROR_MSG.invalidInput);
  }
}
