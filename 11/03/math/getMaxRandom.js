function getMaxRandom(max){
  return Math.floor(Math.random() * max) + 1
}
const maxRandom = getMaxRandom(20); 
console.log(maxRandom); // 0 이상 20 이하의 무작위 정수
