import {ERROR_MSG} from './constant/error.js';
import {HolidayInfo} from './HolidayInfo.js';

export class Date {
  constructor(input) {
    this.month = 0;
    this.date = [];
    this.validateDate(input);
  }

  validateDate(input) {
    const dayArr = ['월', '화', '수', '목', '금', '토', '일'];
    const month = input.split(',')[0];
    const day = input.split(',')[1];
    if (!Number(month) || month < 1 || month > 12) throw new Error(ERROR_MSG.invalidInput);
    if (dayArr.indexOf(day) === -1) throw new Error(ERROR_MSG.invalidInput);
    this.makeDate(Number(month), day);
    this.month = month;
  }

  makeDate(month, day) {
    const dayNum = this.makeDayNum(month);
    for (let i = 1; i <= dayNum; i++) {
      this.date.push({date: i, day: day, isHoliday: this.isHoliday(month, i, day)});
      day = this.makeDay(day);
    }
  }

  makeDayNum(month) {
    //7월까지, 홀수달->31, 짝수달->30(예외 2월->28)
    //8월부터, 홀수달->30, 짝수달->31
    if (month === 2) return 28;
    if (month <= 7 && month % 2 === 0) return 30;
    if (month <= 7 && month % 2 === 1) return 31;
    if (month > 7 && month % 2 === 0) return 31;
    if (month > 7 && month % 2 === 1) return 30;
  }

  makeDay(day) {
    const dayArr = ['월', '화', '수', '목', '금', '토', '일'];
    if (day !== '일') {
      return dayArr[dayArr.indexOf(day) + 1];
    }
    return '월';
  }

  isHoliday(m, d, day) {
    if (day === '토' || day === '일') return false;
    for (const {month, date} of HolidayInfo) {
      if (month === m && date === d) return true;
    }
    return false;
  }
}
