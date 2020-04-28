const connection = require('../database/connection')

module.exports = {

    async store(req, res) {

        const { numberCard, namePerson, validDate, securityNumber, fkClientCPF } = req.body

        const response = await connection('creditCards')
        .where("numberCard", numberCard)
        .where("fkClientCPF", fkClientCPF)

        if (response.length > 0) {

            //Se retornar nulo, cartão já foi cadastrado
            return res.json()
        }

        else {
            const [id] = await connection('creditCards').insert({
                namePerson,
                numberCard,
                validDate,
                securityNumber,
                fkClientCPF
            })

            return res.json({id})
        }

    },

    async index(req, res) {

        const {fkClientCPF} = req.body

        const cards = await connection('creditCards').where("fkClientCPF", fkClientCPF).select('*')
        return res.send(cards)
    },

    async destroy(req, res){

        const {fkClientCPF, numberCard} = req.body
        const card = await connection('creditCards')

        .where("fkClientCPF", fkClientCPF).where("numberCard", numberCard).delete()

        return res.json({message: "removed"},)
    },

    async update(req, res){

        const {fkClientCPF, numberCard, namePerson, validDate, securityNumber } = req.body

        let response = await connection('creditCards')
        .where("fkClientCPF", fkClientCPF)
        .where("numberCard", numberCard)

        if (response.length ==0){
            return res.json()
        }
        else{
            response = await connection('creditCards')
            .where("fkClientCPF", fkClientCPF)
            .where("numberCard", numberCard)
            .update({
                namePerson,
                validDate,
                securityNumber
            })
            return res.json({message: "updated"},)

        }      
    },

}