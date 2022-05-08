const { Router, request, response } = require("express");


class offerRoute {
  #router;
  #offerService;
  constructor() {
    this.#router = Router();
    this.#offerService = new offerService();
    this.#routes();
  }

  #routes() {
    this.#router.post(
      "/offers",
      this.#offerService.post
    );
  }

  get router() {
    return this.#router;
  }
}

const { router: offerRoute } = new offerRoute();

module.exports = {
  offerRoute,
};
