const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let l = 0;
while(l<ingredients.length){
  console.log(ingredients[l]);
  l++;
}
// Write a for loop that prints out the contents of ingredients:
for(let i = 0;i<ingredients.length;i++){
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(let j = ingredients.length;j>=0;j--){
  console.log(ingredients[j]);
}