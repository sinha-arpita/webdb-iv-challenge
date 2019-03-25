
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quantities').insert([
        {recipe_id:1 ,ingredient_id:6,unit:'lbs',quantity:3.6},
        {recipe_id:1 ,ingredient_id:1,unit:'tsps',quantity:3.6},
        {recipe_id:1 ,ingredient_id:7,unit:'oz',quantity:2.6},
        {recipe_id:1 ,ingredient_id:3,unit:'cups',quantity:4.6},
        {recipe_id:1 ,ingredient_id:4,unit:'lbs',quantity:4.6},
        {recipe_id:2 ,ingredient_id:6,unit:'lbs',quantity:3.6},
        {recipe_id:2 ,ingredient_id:7,unit:'cups',quantity:3.6},
        {recipe_id:3 ,ingredient_id:1,unit:'cups',quantity:3.9},
        {recipe_id:3 ,ingredient_id:8,unit:'cups',quantity:3.6},
        {recipe_id:3 ,ingredient_id:2,unit:'cups',quantity:3.3},
      ]);
    });
};
