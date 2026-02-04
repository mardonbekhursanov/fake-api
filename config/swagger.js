const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Users API",
      version: "1.0.0",
      description: "Foydalanuvchilarni boshqarish uchun REST API",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
  },
  apis: ["./routes/*.js"], // router joylashgan papka
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;