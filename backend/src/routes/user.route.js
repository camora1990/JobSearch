const { Router } = require("express");
const UserService = require("../services/user.service");
const { check } = require("express-validator");
const { validateField } = require("../middlewares/validateField");
const { validateJWT } = require("../middlewares/validation.middleware");

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
      [validateJWT,check("email","Email invalido").isEmail(), validateField],
      this.#userService.post
    );
    this.#router.get("/", validateJWT, this.#userService.getUsers)
  }

  get router() {
    return this.#router;
  }
}

const { router: userRoute } = new UserRoute();

module.exports = {
  userRoute,
};
