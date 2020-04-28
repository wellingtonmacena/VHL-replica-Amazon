const connection = require('../database/connection')

module.exports = {

    async store(req, res) {
        const { itemCode, nameProduct, price, fkBrandCNPJ } = req.body

        let response = await connection('products')
            .where({
                itemCode,
                fkBrandCNPJ
            })

        if (response.length == 0) {
            response = await connection('products').insert({
                itemCode,
                fkBrandCNPJ,
                nameProduct,
                price,

            })
            return res.json(response)

        }
        else {
            return res.json()
        }

    },

    async index(req, res) {

        const response = await connection("products").select("*")

        return res.json(response)

    },

    async destroy(req, res) {
        const { itemCode, fkBrandCNPJ } = req.body

        let response = await connection('products')
            .where({
                itemCode,
                fkBrandCNPJ
            })

        if (response.length == 0) {
            return res.json()
        }
        else {
            response = await connection('products')
                .where({
                    itemCode,
                    fkBrandCNPJ
                })
                .delete()

            return res.json(response)

        }

    },

    async update(req, res) {
        const { itemCode, nameProduct, price, fkBrandCNPJ } = req.body

        let response = await connection('products')
            .where({
                itemCode,
                fkBrandCNPJ
            })

        if (response.length == 0) {
            return res.json()
        }
        else {
            response = await connection('products')
                .where({
                    itemCode,
                    fkBrandCNPJ
                })
                .update({
                    price,
                    nameProduct
                })

            return res.json(response)

        }

    }
}