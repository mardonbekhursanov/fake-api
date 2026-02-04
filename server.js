const express = require("express")
const app = express()
//Dotenv
require("dotenv").config()
const path = require("path")
const cors = require("cors")
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const db = require("./models")


//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// CORS
app.use(cors({
    origin: "*"
}))
app.use("/", require("./routes"))
app.get((req, res, next)=>{
    res.status(404).json({
        message: "Not Found!"
    })
})

const PORT = process.env.PORT
const start = async () => {
    await db.sequelize.sync({force: false})
    app.listen(PORT, ()=>{
        console.log(`Server is running on: http://localhost:${PORT}`);
    })
}
start()
