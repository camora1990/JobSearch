const { Router, request, response } = require("express");


class detailRoute {
  #router;
  #detailService;
  constructor() {
    this.#router = Router();
    this.#detailService = new detailService();
    this.#routes();
  }

  #routes() {
    this.#router.get(
      "/detail",
      this.#detailService.get
    );
  }


}

const { router: detailRoute } = new detailRoute();

module.exports = {
  detailRoute,
};
