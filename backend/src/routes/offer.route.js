const { Router } = require("express");
const OfferService = require("../services/ofert.service");
const { check } = require("express-validator");
const { validateField } = require("../middlewares/validateField");

class OfferRoute {
  #router;
  #offerService;
  constructor() {
    this.#router = Router();
    this.#offerService = new OfferService();
    this.#routes();
  }

  #routes() {
    this.#router.post("/", this.#offerService.post);
    this.#router.get(
      "/:id",
      [check("id", "Id is invalid mongo id").isMongoId(), validateField],
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
