import OutputView from './OutputView.js';

export class Assigning {
  constructor(date, workers) {
    this.month = date.month;
    this.date = date.date;
    this.workers = workers;
    this.weekdayOrder = -1;
    this.weekendOrder = -1;
    this.worker = '';
    this.weekdayKeep = '';
    this.weekendKeep = '';
    this.assigning();
  }
  //date: {date: 1, day: 월, isHoliday: false}
  //workers:{weekday:[...],weekend:[...]}
  assigning() {
    this.date.map((d) => {
      //주말인 경우
      if (d.day === '토' || d.day === '일' || d.isHoliday) this.assigningWeekend(d);
      else this.assigningWeekday(d);
    });
  }

  assigningWeekday(date) {
    this.weekdayOrder++;
    if (this.weekdayKeep !== '') {
      OutputView.printWork(this.month, date.date, date.day, this.weekdayKeep);
      this.weekdayKeep = '';
      return;
    }
    if (this.worker !== this.workers.weekday[this.weekdayOrder]) {
      OutputView.printWork(this.month, date.date, date.day, this.workers.weekday[this.weekdayOrder]);
      this.worker = this.workers.weekday[this.weekdayOrder];
    } else {
      OutputView.printWork(this.month, date.date, date.day, this.workers.weekday[this.weekdayOrder + 1]);
      this.weekdayKeep = this.workers.weekday[this.weekdayOrder];
    }

    if (this.weekdayOrder >= this.workers.weekday.length - 1) this.weekdayOrder = -1;
  }

  assigningWeekend(date) {
    this.weekendOrder++;
    if (this.weekendKeep !== '') {
      OutputView.printWork(this.month, date.date, date.day, this.weekendKeep, date.isHoliday);
      this.weekendKeep = '';
      return;
    }
    if (this.worker !== this.workers.weekend[this.weekendOrder]) {
      OutputView.printWork(this.month, date.date, date.day, this.workers.weekend[this.weekendOrder], date.isHoliday);
      this.worker = this.workers.weekend[this.weekendOrder];
      this.weekendKeep = '';
    } else {
      OutputView.printWork(this.month, date.date, date.day, this.workers.weekend[this.weekendOrder + 1], date.isHoliday);
      this.weekendKeep = this.workers.weekend[this.weekendOrder];
    }
    if (this.weekendOrder >= this.workers.weekend.length - 1) this.weekendOrder = -1;
  }
}
