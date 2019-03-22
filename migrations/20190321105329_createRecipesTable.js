
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes',table =>{
      table.increments();
      
      table.string('recipe_name',128).notNullable()

      //foreign key
      table.integer('dish_id')
           .unsigned()
           .references('id')
           .inTable('dishes')
           .onDelete("CASCADE")
           .onUpdate('CASCADE')
  })
};


// remove table
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
 };
 
   
   
   
 