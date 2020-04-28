
exports.up = function(knex) {
  return knex.schema.createTable('clients', function (table){
      table.integer('CPF').notNullable().primary()
      table.string('nameClient').notNullable()
      table.string('birthDate').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('clients')
};
