
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Pepperoni Pizza'},
        {recipe_name: 'Chicken Marsala'},
        {recipe_name: 'Carnitas Tacos'},
      ]);
    });
 };