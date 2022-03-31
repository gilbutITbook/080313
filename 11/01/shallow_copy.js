const person = {
  name:'Hong Gildong'
}
const copyPerson = person; // person 변수에 할당된 객체를 copyPerson 변수에 할당
person.name='Hong'; // person 객체 변경 시도
console.log(person.name);
console.log(copyPerson.name);
