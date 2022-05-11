const { Router } = require("express");
const OfferService = require("../services/ofert.service");
const { check } = require("express-validator");
const { validateField } = require("../middlewares/validateField");
const { validateJWT } = require("../middlewares/validation.middleware");

class OfferRoute {
  #router;
  #offerService;
  constructor() {
    this.#router = Router();
    this.#offerService = new OfferService();
    this.#routes();
  }

  #routes() {
    this.#router.post("/", [validateJWT], this.#offerService.post);
    this.#router.get(
      "/:id",
      [
        validateJWT,
        check("id", "Id is invalid mongo id").isMongoId(),
        validateField,
      ],
      this.#offerService.getOffertByUser
    );
  }

  get router() {
    return this.#router;
  }
}

const { router: offRoute } = new OfferRoute();

module.exports = {
  offRoute,
};
