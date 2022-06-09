let sleepTime: Date | string = new Date('2022-05-30T23:30:00.000+00:00');
let wakeTime: Date | string  = new Date('2022-05-31T06:10:00.000+00:00');


// 시간차이를 -시간 -분으로 계산
const timeGap = (wakeTime.getTime() - sleepTime.getTime()) / (1000 * 60);
const hour = Math.floor(timeGap / 60);
const minute = timeGap % 60;
//console.log(hour);
//console.log(minute)

const amPm = (h: number) => h < 12 ? "오전 " : "오후 ";
const timeFormat = (h: any, m: any) => { return amPm(h) + [h.toString(), m.toString()].join(':') }
sleepTime = timeFormat(sleepTime.getUTCHours(), sleepTime.getUTCMinutes());
wakeTime = timeFormat(wakeTime.getUTCHours(), wakeTime.getUTCMinutes());
//sleepTime = amPm(sleepTime.getUTCHours()) + [sleepTime.getUTCHours().toString(), sleepTime.getUTCMinutes().toString()].join(':');
//wakeTime = amPm(wakeTime.getUTCHours()) + [wakeTime.getUTCHours().toString(), wakeTime.getUTCMinutes().toString()].join(':');
console.log(sleepTime);
console.log(wakeTime);
console.log(sleepTime + ' - ' + wakeTime); // 오후 23:30 - 오전 6:10
