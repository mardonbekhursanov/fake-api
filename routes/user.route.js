/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - lastname
 *         - username
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Ali
 *         lastname:
 *           type: string
 *           example: Valiyev
 *         username:
 *           type: string
 *           example: alivali
 *         age:
 *           type: integer
 *           example: 20
 *         image_url:
 *           type: string
 *           example: https://image.com/photo.png
 *         address:
 *           type: string
 *           example: Toshkent
 *         phone:
 *           type: string
 *           example: +998901234567
 */

const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const routes = require("express").Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Barcha foydalanuvchilarni olish
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Foydalanuvchilar ro'yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
routes.get("/", getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: ID bo‘yicha foydalanuvchi olish
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Foydalanuvchi topildi
 *       404:
 *         description: Foydalanuvchi topilmadi
 */
routes.get("/:id", getUserById);

/**
 * @swagger
 * /users/add:
 *   post:
 *     summary: Yangi foydalanuvchi qo‘shish
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Foydalanuvchi yaratildi
 */
routes.post("/add", addUser);

/**
 * @swagger
 * /users/{id}:
 *   post:
 *     summary: Foydalanuvchini yangilash
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Foydalanuvchi yangilandi
 */
routes.put("/:id", updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Foydalanuvchini o‘chirish
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       203:
 *         description: Foydalanuvchi o‘chirildi
 */
routes.delete("/:id", deleteUser);

module.exports = routes;