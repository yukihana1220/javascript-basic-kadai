const year = new Date('August 22, 2023 23:15:30 GMT+11:00');
const month = new Date('August 22, 2023 23:15:30 GMT+11:00');
const date = new Date('August 22, 2023 23:15:30 GMT+11:00');

console.log((year.getUTCFullYear() + '年')
+ ((month.getUTCMonth()+1) + '月')
+ (date.getUTCDate() + '日'));
