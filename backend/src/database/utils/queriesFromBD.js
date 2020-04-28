const connection = require("../connection")

module.exports = {
    async price(itemCode){
        let response = await connection('products')
        .where(
            itemCode
        )
        .select("price")
        
        console.log("price")
        return res.json(response)

    },

    async cep(fkClientCPF){
        let response = await connection('shippingInfo')
        .where(
            fkClientCPF
        )
        .select("CEP")
        .first()

        return res.json(response)

    },
    async phoneClient(){
        let response = await connection('shippingInfo')
        .where(
            "fkClientCPF", 349
        )
        .select("phoneClient")
        .first()

        return response

    },

    async allowedPeople(fkClientCPF){
        let response = await connection('shippingInfo')
        .where(
            fkClientCPF
        )
        .select("allowedPeople")
        .first()

        return res.json(response)

    },

    async nameProduct(itemCode){
        let response = await connection('products')
        .where(
            itemCode
        )
        .select("nameProduct")

        return res.json(response)

    },

    async nameBrand(fkBrandCNPJ){
        let response = await connection('brands')
        .where(
            fkBrandCNPJ
        )
        .select("nameBrand")

        return res.json(response)

    },

    async numberCard(fkNumberCard){
        let response = await connection('creditCards')
        .where(
            fkNumberCard
        )
        .select("numberCard")
        
        console.log("numberCard")
        return res.json(response)

    }
}