
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'salt'},
        {ingredient_name: 'flower'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'pepperoni'},
        {ingredient_name: 'carnitas'},
        {ingredient_name: 'chicken'},
        {ingredient_name: 'tomato sauce'},
        {ingredient_name: 'corn tortillas'}
      ]);
    });
 };