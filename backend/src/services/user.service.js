const { request, response } = require("express");
const { generateJWT } = require("../helpers/jwt.helper");
const responseMessage = require("../helpers/messages.helper");
const { userModel } = require("../models");

class UserService {
  async post(req = request, res = response) {
    const { email, password, name, city, role } = req.body;
    const user = new userModel({ email, password, name, city, role });

    try {
      const {email,name,city,role,_id}=await user.save();
      const token = await generateJWT({email,name,city,role,_id});
      const response = responseMessage(true, 200, "user created", {
        user: user,
        token,
      });
      return res.status(200).json(response);
    } catch (error) {
      const response = responseMessage(false, 500, error.message);
      return res.status(200).json(response);
    }
  }
}

module.exports = UserService;
