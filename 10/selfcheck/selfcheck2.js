function getOrderDesc(arr){
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    const currentNumber = arr[i];
    if(result < currentNumber){
      result = currentNumber
    }
  }
  return result;
}
const result = getOrderDesc([10, 20, 100, 30, 40]);
console.log(result)