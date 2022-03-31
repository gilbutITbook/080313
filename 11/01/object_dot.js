const person = {
  name:{
    firstName:'Gildong',
    lastName:'Hong'
  },
  age:20,
  likes:['apple', 'samsung'],
  printHello:function(){
    return 'hello';
  }
};
console.log(person.name.lastName); // Hong 출력
console.log(person.age);  // 20 출력
console.log(person.likes[0]);  // apple 출력
console.log(person.printHello());  // hello 출력
