
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', (table) =>{
  table.increments('id');
  table.text('name')
  table.text('lat')
  table.text('long')
  table.text('photo')
  table.text('description')
  })
};

// express knex 4 lyfe

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('locations');
};
