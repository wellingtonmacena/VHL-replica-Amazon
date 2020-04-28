exports.up = function(knex) {
    return knex.schema.createTable('Sales', function(table){
        table.increments()
        
        table.integer('quantityProducts').notNullable()        
        table.integer("fkClientCPF").notNullable()
        table.string("fkBrandCNPJ").notNullable() 
        table.integer('fkItemCode').notNullable()
        
        //table.integer('clientName').notNullable()
        
        //I'll make queries in DB to select these fields from their respectives tables
        table.string('phoneClient').notNullable()
        table.string('date').notNullable()
        table.string('totalPrice').notNullable()
        table.string('CEP').notNullable()
        table.string('allowedPeople').notNullable()
        table.string('nameProduct').notNullable()
        table.string('nameBrand').notNullable()
        table.string('numberCard').notNullable()


        table.foreign("fkClientCPF").references('CPF').inTable('clients')
        table.foreign("fkItemCode").references('ItemCode').inTable('products')
        table.foreign("fkBrandCNPJ").references('CNPJ').inTable('brands')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('shippingInfo')
};
