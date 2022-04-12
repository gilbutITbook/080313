let a = 10; // 전역 스코프
function sum(){
  // let a = 10; // 지역 스코프
  console.log(`함수 내부: ${a}`);
}
sum();
console.log(`함수 외부: ${a}`);
