const express = require("express");
const server = express();
server.use(express.json());
const db = require("./data/dbHelpers.js");

db.getDishes()
  .then(dishes => {
    console.log("dishes", dishes); //output all the dishes
  })
  .catch(err => {
    console.log("issues with dishes", err);
  });

db.getById(1)
  .then(dish => {
    console.log("dish", dish); //output Pizza
  })
  .catch(err => {
    console.log("issues with dishes", err);
  });

db.addDish({ dish_name: "pie" })
  .then(dish => {//dish is the id of the latest added element
    console.log("DISH id : ", dish);

    db.getDishes();
  })
  .catch(err => {
    console.log("issues with  adding dish", err);
  });
db.addRecipe({ recipe_name: "apple pie2" ,dish_id:13})//Passing whole object
  .then(recipe => {
    console.log("recipe id:", recipe);
  })
  .catch(err => {
    console.log("issues with  adding recipe", err);
  });

  db.addRecipe({ recipe_name: "mango pie" ,dish_id:13})//Passing whole object
  .then(recipe => {
    console.log("recipe id:", recipe);
  })
  .catch(err => {
    console.log("issues with  adding recipe", err);
  });  

db.getRecipes()
  .then(recipes => {
    console.log("recipes", recipes);
  })
  .catch(err => {
    console.log("issues with recipes", err);
  });
db.getAllRecipes()
  .then(recipes => {
    console.log("recipes", recipes); //output all the dishes
  })
  .catch(err => {
    console.log("issues with dishes", err);
  });
  
db.getDish(13)
  .then(dishes =>{
    console.log('dishes',dishes)
  })
  .catch(err => {
    console.log("issues with get dishes", err);
  });

const port = 6000;
server.listen(port, () => {
  console.log(`server is listening at the port:${port}`);
});
