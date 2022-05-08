const { Router, request, response } = require("express");
const UserService = require("../services/user.service");
const { check } = require("express-validator");
const { validateField } = require("../middlewares/validateField");

class UserRoute {
  #router;
  #userService;
  constructor() {
    this.#router = Router();
    this.#userService = new UserService();
    this.#routes();
  }

  #routes() {
    this.#router.post(
      "/",
      [check("email","Email invalido").isEmail(), validateField],
      this.#userService.post
    );
  }

  get router() {
    return this.#router;
  }
}

const { router: userRoute } = new UserRoute();

module.exports = {
  userRoute,
};
