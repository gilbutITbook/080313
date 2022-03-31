outLoop:
for(let i=0; i<2; i++){
  innerLoop:
  for(let j=0; j<2; j++){
    if(j===1) continue outLoop; // outLoop 식별자의 반복문을 한 번에 건너뛰고 실행
    console.log(i, j);
  }
}
