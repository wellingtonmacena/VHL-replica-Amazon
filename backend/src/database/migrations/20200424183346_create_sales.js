exports.up = function(knex) {
    return knex.schema.createTable('Sales', function(table){
        table.increments()
        table.integer("fkClientCPF").notNullable()
        table.string('clientName').notNullable()

        table.string("fkBrandCNPJ").notNullable()
        table.string('nameBrand').notNullable()

        table.string('date').notNullable()
        table.integer('fkItemCode').notNullable()
        table.string('nameProduct').notNullable()
        table.string('price').notNullable()
        table.integer('quantityProducts').notNullable()           
        table.string('totalPrice').notNullable() 
        table.string('numberCard').notNullable() 
        table.string('phoneClient').notNullable()
        table.string('CEP').notNullable()
        table.string('allowedPeople').notNullable()


        table.foreign("fkClientCPF").references('CPF').inTable('clients')
        table.foreign("fkItemCode").references('ItemCode').inTable('products')
        table.foreign("fkBrandCNPJ").references('CNPJ').inTable('brands')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('shippingInfo')
};
