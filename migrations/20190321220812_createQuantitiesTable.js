
exports.up = function(knex, Promise) {
    return knex.schema.createTable("quantities", tbl => {
        
      tbl.integer("ingredient_id");//declaring the foreign key
      tbl
        .foreign("ingredient_id")//using the foreign key
        .references("id")
        .inTable("ingredients");//on this table
   
      tbl.integer("recipe_id");
      tbl
        .foreign("recipe_id")
        .references("id")
        .inTable("recipes");
      tbl.primary(["ingredient_id", "recipe_id"], "id");
   
      tbl.enu('unit',['tbls','tsps','cups','lbs','oz']) .notNullable();
   
      tbl.float('quantity',2).notNullable();
    });
   };
   
   exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('quantities');
   }