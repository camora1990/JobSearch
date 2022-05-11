const { request, response } = require("express");
const { generateJWT } = require("../helpers/jwt.helper");
const responseMessage = require("../helpers/messages.helper");
const { userModel } = require("../models");

class UserService {
  async post(req = request, res = response) {
    const { email, password, name, city, role } = req.body;
    const user = new userModel({ email, password, name, city, role });

    try {
      await user.save();
      const token = await generateJWT(user);
      const response = responseMessage(true, 200, "user created", {
        user: user,
        token,
      });
      return res.status(200).json(response);
    } catch (error) {
      const response = responseMessage(false, 500, error.message);
      return res.status(500).json(response);
    }
  }
  async getUsers(req = request, res = response){
    try {
      const users = await userModel.find()
      const response = responseMessage(true, 200, "all users", users);
      return res.status(200).json(response)
    } catch (error) {
      const response = responseMessage(false, 500, error.message);
      return res.status(500).json(response);
    }
  }
}

module.exports = UserService;
