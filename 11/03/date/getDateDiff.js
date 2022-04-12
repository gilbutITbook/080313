const date1 = new Date('2022-12-23');
const date2 = new Date('2022-12-25');

const dateDiff = date2.getTime() - date1.getTime();
const interval = dateDiff / (60 * 60 * 24 * 1000); 
console.log(`두 날짜의 차이는 ${interval}일입니다.`); // 두 날짜의 차이는 2일 입니다.