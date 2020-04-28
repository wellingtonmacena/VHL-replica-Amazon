
exports.up = function(knex) {
  return knex.schema.createTable('creditCards', function(table){
      table.increments("idCard")
      table.string("namePerson").notNullable()
      table.integer('numberCard').notNullable()
      table.string('validDate').notNullable()
      table.string("securityNumber").notNullable()
      table.integer("fkClientCPF").notNullable()

      table.foreign("fkClientCPF").references('CPF').inTable('clients')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('creditCards')
};
