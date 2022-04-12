const person = {
  name:{
    firstName:"Gildong",
    lastName:"Hong"
  },
  likes:["apple", "samsung"],
  printHello:function(){
    return "hello";
  }
};
console.log(person["name"]); // { firstName: 'Gildong', lastName: 'Hong' }
console.log(person["name"]["firstName"]); // Gildong
console.log(person["likes"]); // [ 'apple', 'samsung' ]
console.log(person["likes"][0]); // apple
console.log(person["likes"][1]); // samsung
console.log(person["printHello"]); // [Function: printHello]
console.log(person["printHello"]()); // hello