const connection = require('../database/connection')

module.exports = {
    async store(req, res) {
        const { CPF, clientName, birthDate, email, password } = req.body

        let response = await connection('clients').where("CPF", CPF)

        if (response.length > 0) {
            return res.json()
        }
        else {
            response = await connection('clients').insert({
                CPF,
                clientName,
                birthDate,
                email,
                password

            })
            return res.json(response)
        }

    },

    //Probably it's wrong. CHECK IT OUT
    async login(req, res) {

        const { email, password } = req.body

        const response = await connection('clients').where({
            email,
            password
        }).select('*')

        sessionStorage.setItem('email', email);

        return res.json(response)


    },

    async index(req, res) {

        const response = await connection('clients').select('*')

        return res.json(response)
    },

    async destroy(req, res) {

        const { CPF } = req.body;

        const response = await connection('clients').where("CPF", CPF)

        if(response.length ==0){
            return res.json()
        }
        else{

            await connection('clients').where("CPF", CPF)
            .delete()
            return res.json("Client has removed")
        }
            
    },

    async update(req, res) {

        const { CPF, clientName, birthDate, email, password } = req.body

        const response = await connection('clients').where("CPF", CPF)

        if(response.length ==0){
            return res.json()
        }
        else{
            await connection('clients').where("CPF", CPF)
            .update("clientName", clientName)
            .update("birthDate", birthDate)
            .update("email", email)
            .update("password", password)

        return res.json("Client has updated")
        }
        
    }
}