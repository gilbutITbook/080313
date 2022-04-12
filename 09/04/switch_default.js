let food = "melon";
switch (food) {
  case "melon":
  case "apple":
  case "banana":
    console.log("fruit");
    break; 
  case "carrot":
    console.log("vegetable");
    break;
  default:
    console.log("It's not fruits and vegetables.");
    break;
}