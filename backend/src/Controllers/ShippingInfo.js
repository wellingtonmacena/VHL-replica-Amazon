const connection = require('../database/connection')

module.exports = {

    async store(req, res) {
        const { phoneClient, cep, allowedPeople, fkClientCPF } = req.body

        let response = await connection('shippingInfo')
            .where("fkClientCPF", fkClientCPF)
            .where("cep", cep)

        if (response.length == 0) {
            response = await connection('shippingInfo').insert({
                phoneClient,
                cep,
                allowedPeople,
                fkClientCPF

            })
            return res.json(response)

        }
        else {
            return res.json()
        }

    },

    async index(req, res) {

        const response = await connection("shippingInfo").select("*")

        return res.json(response)

    },

    async destroy(req, res) {
        const { cep, fkClientCPF } = req.body

        let response = await connection('shippingInfo').where({
            cep,
            fkClientCPF
        })

        if (response.length == 0) {
            return res.json()
        }
        else {
            response = await connection('shippingInfo')
                .where({
                    cep,
                    fkClientCPF
                })
                .delete()

            return res.json(response)
        }


    },

    async update(req, res) {
        const { phoneClient, cep, allowedPeople, fkClientCPF } = req.body

        let response = await connection('shippingInfo')
        .where({
            cep,
            fkClientCPF

        })

        if(response.length ==0){
            return res.json()
        }
        else{
            
            response = await connection('shippingInfo')
            .where({
                cep,
                fkClientCPF
            })
            .update({
                phoneClient,
                allowedPeople
            })

        return res.json(response)
        }       
    }
}