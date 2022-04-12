let obj = {name: "철수", age: 20};
for(let key in obj){
  if(key === "age") break;
  console.log(obj[key])
}
