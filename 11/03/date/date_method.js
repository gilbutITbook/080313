const date = new Date(2022,11,25,18,30,50); // 2022년 12월 25일 18시 30분 50초
const dateFormat = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(dateFormat); // 2021-11-13 18:30:50