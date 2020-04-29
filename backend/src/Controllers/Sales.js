const connection = require('../database/connection')
const getDate = require('../utils/getDate')
module.exports = {

    async store(req, res) {
        const {
            quantityProducts,
            fkClientCPF,
            itemCode,
            CNPJ } = req.body

        let phoneClient = await connection('shippingInfo')
            .where({ fkClientCPF })
            .select("phoneClient")
        phoneClient = Object.values(phoneClient[0])[0]


        let allowedPeople = await connection('shippingInfo')
            .where(
                { fkClientCPF }
            )
            .select("allowedPeople")
        allowedPeople = Object.values(allowedPeople[0])[0]


        let CEP = await connection('shippingInfo')
            .where(
                { fkClientCPF }
            )
            .select("CEP")
        CEP = Object.values(CEP[0])[0]


        let numberCard = await connection('creditCards')
            .where({
                fkClientCPF
            })
            .select("numberCard")

        numberCard = Object.values(numberCard[0])[0]


        let price = await connection('products')
            .where(
                { itemCode }
            )
            .select("price")

        price = Object.values(price[0])[0]


        let totalPrice = Number(price) * quantityProducts


        let nameProduct = await connection('products')
            .where(
                { itemCode }
            )
            .select(" nameProduct")
        nameProduct = Object.values(nameProduct[0])[0]


        let nameBrand = await connection('brands')
            .where(
                { CNPJ }
            )
            .select(" nameBrand")
        nameBrand = Object.values(nameBrand[0])[0]

        let CPF = fkClientCPF
        let clientName = await connection('clients')
            .where({
                CPF
            })
            .select("clientName")
        clientName = Object.values(clientName[0])[0]

        let date = getDate()
        //-----------//

        fkItemCode = itemCode
        fkBrandCNPJ = CNPJ

        let response = await connection('sales')
            .where({
                fkClientCPF,
                fkItemCode,
                quantityProducts,
                date
            })

        if (response.length == 0) {
            response = await connection('sales').insert({
                quantityProducts,
                phoneClient,
                numberCard,
                fkClientCPF,
                fkItemCode,
                fkBrandCNPJ,
                date,
                totalPrice,
                CEP,
                allowedPeople,
                nameProduct,
                nameBrand,
                numberCard,
                clientName,
                price
            })
            return res.json(response)

        }
        else {
            return res.json()
        }

    },

    async index(req, res) {
        const { CPF } = req.body
        const response = await connection('sales')
            .where("fkClientCPF", CPF)
            .select('*')
        return res.send(response)
    },

    async show(req, res) {
        const { CPF, id } = req.body

        const response = await connection('sales')
            .where("fkClientCPF", CPF)
            .where({ id })
            .select("*")

        return res.json(response)

    }

}