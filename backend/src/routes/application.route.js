const express = require("express");
const ApplicationService = require("../services/application.service");

class ApplicationRoute {
  #router;
  #applicationService;
  constructor() {
    this.#router = express();
    this.#applicationService = new ApplicationService();
    this.#route();
  }
  #route() {
    this.#router.post("/", this.#applicationService.post);

    this.#router.get("/",this.#applicationService.getOffert)
  }

  get router() {
    return this.#router;
  }
}

const { router: aapplicationRouter } = new ApplicationRoute();
module.exports = {
  aapplicationRouter,
};
