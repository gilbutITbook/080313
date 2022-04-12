function sum(num1, num2){
  if(typeof num1 !== "number" || typeof num2 !== "number"){
    return; // 매개변수가 숫자가 아니면 강제 종료
  }
  return num1 + num2;
}
let result = sum("a", "b");
console.log("out:" + result); // out: undefined