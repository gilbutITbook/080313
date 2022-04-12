function sum(num1, num2){
  let result = num1 + num2;
  console.log("inner: " + result);
}
sum(10, 20); // inner: 30


/* function sum(num1, num2){
  let result = num1 + num2; 
}
sum(10, 20); 
console.log("out: " + result);  // ReferenceError: result not defined
*/