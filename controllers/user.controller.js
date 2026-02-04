const db = require("../models");
const Users = db.Users;

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({ raw: true });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Server Xatoligi",
      error: error.message,
    });
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if(!user){
        throw new Error("Bunday foydalanuvchi mavjud emas!")
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Server Xatoligi",
      error: error.message,
    });
  }
};
const addUser = async (req, res) => {
  try {
    const { name, lastname, username, age, image_url, address, phone } =
      req.body;
    const existUser = await Users.findOne({ where: { username } });
    if (existUser) {
      throw new Error("Bunday foydalanuvchi oldin mavjud edi");
    }
    await Users.create({
      name,
      lastname,
      username,
      age,
      image_url,
      address,
      phone,
    });
    res.status(201).json({
      message: "Foydalanuvchi muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Xatoligi",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if(!user){
        throw new Error("Bunday foydalanuvchi mavjud emas!")
    }
    const { name, lastname, username, age, image_url, address, phone } =
      req.body;
    await Users.update(
      {
        name,
        lastname,
        age,
        username,
        image_url,
        address,
        phone,
      },
      { where: { id: req.params.id } },
    );
    res.status(201).json({
      message: "Muvaffaqiyatli o'zgartirildi!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Xatoligi",
      error: error.message,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if(!user){
        throw new Error("Bunday foydalanuvchi mavjud emas!")
    }
    await Users.destroy({where: {id: req.params.id}})
    res.status(203).json({
        message: "Foydalanuvchi o'chirildi!"
    })
  } catch (error) {
    res.status(500).json({
      message: "Server Xatoligi",
      error: error.message,
    });
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};
