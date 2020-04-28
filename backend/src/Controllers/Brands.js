const connection = require('../database/connection')

module.exports = {

    async store(req, res) {
        const { CNPJ, nameBrand, headOffice, nameOwner } = req.body

        let response = await connection('brands')
            .where({
                CNPJ,
                nameBrand
            })

        if (response.length == 0) {
            response = await connection('brands').insert({
                CNPJ,
                nameBrand,
                headOffice,
                nameOwner,

            })
            return res.json(response)

        }
        else {
            return res.json()
        }

    },

    async index(req, res) {

        const response = await connection("brands").select("*")

        return res.json(response)

    },

    async destroy(req, res) {
        const { CNPJ, nameBrand } = req.body

        let response = await connection('brands')
            .where({
                CNPJ,
                nameBrand
            })

        if (response.length == 0) {
            return res.json()
        }
        else {
            response = await connection('brands')
                .where({
                    CNPJ,
                    nameBrand
                })
                .delete()

            return res.json(response)

        }

    },

    async update(req, res) {
        const { CNPJ, nameBrand, headOffice, nameOwner } = req.body

        let response = await connection('brands')
            .where({
                CNPJ,
                nameBrand
            })

        if (response.length == 0) {
            return res.json()
        }
        else {
            response = await connection('brands')
                .where({
                    CNPJ,
                    nameBrand
                })
                .update({
                    headOffice,
                    nameOwner
                })

            return res.json(response)

        }

    }
}