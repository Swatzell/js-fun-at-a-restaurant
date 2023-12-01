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

function addIngredients(ingredientName , ingredients){
  ingredients.push(ingredientName)
  

return addIngredients
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


