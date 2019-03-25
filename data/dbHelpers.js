const knex =require("knex")
const dbConfig = require("../knexfile.js"); 
const db = knex(dbConfig.development);

module.exports ={

    getDishes:()=>{
        return db('dishes')

    },
    getById : (id)=> {
        return db('dishes')
          .where({ id })
          .first();
    },
    addDish: (dish) => {
        return db('dishes')
          .insert(dish)
          .then(id => {
            console.log("IDS",id)
            return id[0];
          });
    },
    addRecipe:(recipe)=>{
        return db('recipes')
        .insert(recipe)
        .then(id=>{//aaray of recipes id where only one element is there in the array
          return id[0];//it givers the  id of the inserted recipe, 
          

        });


    },
    getAllRecipes:()=>{
      return db('recipes')

  },
     
     
    getRecipes: ()=>{
         return db.select('recipes.id','recipe_name','dish_name')
           .from ('recipes')

         .innerJoin('dishes','dish_id','dishes.id')

        // return db('recipes');
    },
    
    getDish: (id)=>{
      return db.select('recipes.id','recipe_name', "dish_name")
           .from ('recipes').where('dish_id', id).innerJoin("dishes", "dish_id", "dishes.id")

         

     // return db('recipes');
 }




}