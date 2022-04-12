for(let i = 1; i < 10; i++){
  for(let k = 0; k < 10; k++){
    for(let j = 0; j < 10; j++){
      let sum = (i * i * i) + (k * k * k) + (j * j * j);
      let currentNumber = (i * 100) + (k * 10) + j; 
      if(sum === currentNumber){
        console.log(currentNumber);
      }
    }
  }
}