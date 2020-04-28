exports.up = function(knex) {
    return knex.schema.createTable('shippingInfo', function(table){
        table.increments()
        table.string("phoneClient").notNullable()
        table.string('cep').notNullable()
        table.string('allowedPeople').notNullable()
        table.integer("fkClientCPF").notNullable()

        table.foreign("fkClientCPF").references('CPF').inTable('clients')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('shippingInfo')
};
