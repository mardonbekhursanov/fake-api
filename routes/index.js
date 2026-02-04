const routes = require("express").Router()

routes.use('/users', require("./user.route"))
routes.get('/', (req, res)=>{
    res.status(200).json({
        message: "FAKE API",
        desc: "Backend bilan ishlovchilar uchun fake api",
        allowMethods: ["GET", "POST", "PUT", "DELETE"]
    })
})

module.exports = routes;