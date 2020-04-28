
exports.up = function(knex) {
    return knex.schema.createTable('brands', function(table){
        table.string("CNPJ").notNullable().primary()
        table.string("nameBrand").notNullable()
        table.string('headOffice').notNullable()
        table.string('nameOwner').notNullable()

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('brands')
};
