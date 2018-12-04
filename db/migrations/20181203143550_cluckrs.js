
exports.up = function(knex) {
    return knex.schema.createTable('cluckrs', table=>{
        table.increments("id");
        table.string("image_url");
        table.text("username");
        table.text("content");
        table.timestamp("createdAt").defaultTo(knex.fn.now());
        table.timestamp("updatedAt").defaultTo(knex.fn.now());
        
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("cluckrs");
};
