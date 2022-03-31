const person = {};
//객체 리터럴 동적 추가
person.name = {
  firstName:'GilDong',
  lastName:'Hong'
};
//배열 동적 추가
person.likes = ['apple', 'samsung'];
//함수 동적 추가
person.printHello = function(){
  return 'hello';
}
console.log(person);