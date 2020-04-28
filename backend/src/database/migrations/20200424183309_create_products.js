
exports.up = function(knex) {
    return knex.schema.createTable('products', function (table){
        table.increments()
        table.integer('itemCode').notNullable()
        table.string('nameProduct').notNullable()
        table.string('price').notNullable()        
        table.string("fkBrandCNPJ").notNullable()

        table.foreign("fkBrandCNPJ").references('CNPJ').inTable('brands')

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
