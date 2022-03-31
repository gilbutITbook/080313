function getMinMaxRandom(min, max){
  return Math.floor(Math.random() * (max - min)) + 1 + min // 20을 제외하고 싶으면 + 1 삭제
}
const maxRandom = getMinMaxRandom(10, 20);
console.log(maxRandom); // 10 이상 20 이하의 무작위 정수
