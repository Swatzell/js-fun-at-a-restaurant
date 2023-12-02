function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type){
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
}

// function addIngredients(ingredientName , ingredients){
//   for (i=0; i < ingredients.length; i++){
//     if (ingredients[i] === ingredientName) 
//   }
//   ingredients.push(ingredientName)
  

 
//   return addIngredients
// }

function addIngredients(ingredientName , ingredientArray){
  if (ingredientArray.includes(ingredientName) === false){
      ingredientArray.push(ingredientName)
  }
  return ingredientArray
}


function formatPrice(addSymbol){
  
  return '$' + addSymbol
}

function decreasePrice(number){
  var newPrice = number - (number * .10)  
  return newPrice
}

// should return an object
function createRecipe(recipeTitle, recipeIngredients, recipeType){
  var recipe = {
    title: recipeTitle,
    ingredients: recipeIngredients,
    type: recipeType,
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


