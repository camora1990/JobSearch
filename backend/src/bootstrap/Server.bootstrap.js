const express = require("express");
const cors = require("cors");
const { config } = require("../config/config");
const { userRoute } = require("../routes/user.route");
const { authRouter } = require("../routes/auth.route");
const { offRoute } = require("../routes/offer.route");
const { aapplicationRouter } = require("../routes/application.route");

class Server {
  #PORT;
  #APP;
  #PATH;

  constructor() {
    this.#PORT = config.port || 3000;
    this.#APP = express();
    this.#PATH = {
      user: "/api/v1/user",
      auth: "/api/v1/login",
      offer: "/api/v1/offer",
      application: "/api/v1/application",
    };
    this.#middleware();
    this.#routes();
  }

  #middleware() {
    this.#APP.use(cors({ origin: "*" }));
    this.#APP.use(express.json());
    this.#APP.use(express.urlencoded({ extended: true }));
  }

  #routes() {
    this.#APP.use(this.#PATH.user, userRoute);
    this.#APP.use(this.#PATH.auth, authRouter);
    this.#APP.use(this.#PATH.offer, offRoute);
    this.#APP.use(this.#PATH.application, aapplicationRouter);
  }

  initServer() {
    return new Promise((resolve, reject) => {
      this.#APP
        .listen(this.#PORT)
        .on("listening", () => {
          resolve(true);
          console.log(`server init on PORT ${this.#PORT}`);
        })
        .on("error", (error) => reject(error));
    });
  }
}

module.exports = Server;
