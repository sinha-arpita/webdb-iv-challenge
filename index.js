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
db.addDish("Cookie")
   .then(dish=>{
       console.log("id:",dish.id);
   })
   .catch(err => {
    console.log("issues with  adding dish", err);
  });  
db.getRecipes()
  .then(recipes => {
    console.log("recipes", recipes);
  })
  .catch(err => {
    console.log("issues with recipes", err);
  });

const port = 6000;
server.listen(port, () => {
  console.log(`server is listening at the port:${port}`);
});
