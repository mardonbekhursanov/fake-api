const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: false
})
const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Users = require("./user.model")(sequelize, Sequelize)
module.exports = db