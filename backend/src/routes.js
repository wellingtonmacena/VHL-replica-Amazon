const express = require('express')
const routes = express.Router()

const ControllerClients = require("./Controllers/Clients")
const ControllerCreditCards = require("./Controllers/CreditCards")
const ControllerShippingInfo = require("./Controllers/ShippingInfo")
const ControllerBrands = require("./Controllers/Brands")
const ControllerProducts = require("./Controllers/Products")
ControllerSales = require('./Controllers/Sales')

//Acessar página principal do site
routes.get("/main")


routes.post("/clientsInfo", ControllerClients.store)
routes.get("/clientsInfo", ControllerClients.index)
routes.delete("/clientsInfo", ControllerClients.destroy)
routes.put("/clientsInfo", ControllerClients.update)

routes.post("/signin", ControllerClients.login)

routes.post("/viewCards", ControllerCreditCards.store)
routes.get("/viewCards", ControllerCreditCards.index)
routes.delete("/viewCards", ControllerCreditCards.destroy)
routes.put("/viewCards", ControllerCreditCards.update)

routes.post("/shippingInfo", ControllerShippingInfo.store)
routes.get("/shippingInfo", ControllerShippingInfo.index)
routes.delete("/shippingInfo", ControllerShippingInfo.destroy)
routes.put("/shippingInfo", ControllerShippingInfo.update)

routes.post("/brands", ControllerBrands.store)
routes.get("/brands", ControllerBrands.index)
routes.delete("/brands", ControllerBrands.destroy)
routes.put("/brands", ControllerBrands.update)

routes.post("/products", ControllerProducts.store)
routes.get("/products", ControllerProducts.index)
routes.delete("/products", ControllerProducts.destroy)
routes.put("/products", ControllerProducts.update)

routes.post("/sales", ControllerSales.store)
routes.get("/sales", ControllerSales.index)


module.exports = routes