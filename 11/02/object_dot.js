const person = {
  name:{
    firstName:"Gildong",
    lastName:"Hong"
  },
  age:20,
  likes:["apple", "samsung"],
  printHello:function(){
    return "hello";
  }
};
console.log(person.name.lastName); // Hong 
console.log(person.age);  // 20
console.log(person.likes[0]);  // apple
console.log(person.printHello());  // hello
// console.log(person."name"); // SyntaxError: Unexpected string
