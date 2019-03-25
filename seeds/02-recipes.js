
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Pepperoni Pizza', dish_id : 1},
        {recipe_name: 'Chicken Marsala', dish_id:2},
        {recipe_name: 'Carnitas Tacos', dish_id:3},
      ]);
    });
 };