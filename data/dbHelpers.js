const knex =require("knex")
const dbConfig = require("../knexfile.js"); 
const db = knex(dbConfig.development);

module.exports ={

    getDishes:()=>{
        return db('dishes')

    },
     getById(id) {
        return db('dishes')
          .where({ id })
          .first();
      },
      addDish(dish) {
        return db('dishes')
          .insert(dish)
          .then(ids => {
            return getById(ids[0]);
          });
      },
     
      //.then(ids => ({ id: ids[0] }));
  
  
     
    getRecipes: ()=>{
        return db('recipes')
        //.innerJoin('dishes','dish_id','dishes.id')


    }



}