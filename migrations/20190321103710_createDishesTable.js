
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', tbl => {
      tbl.increments();
      tbl.string('dish_name').notNullable()
    })
   };exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', tbl => {
      tbl.increments();
      tbl.string('dish_name').notNullable()
    })
   };