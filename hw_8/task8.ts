let recipeMap = new Map<string, number>([
    ["огурцы", 300],
    ["помидоры", 200],
    ["соль", 10],
    ["сметана", 110]

])

let newRecipeMap = new Map<string, number>();
 for(let entry of recipeMap){
   let [title, amount] = entry;
   if (amount > 100){
    newRecipeMap.set(title, amount)
   }
 }
 console.log(newRecipeMap)