const express = require("express");
const cors = require("cors");
const { config } = require("../config/config");

class Server {
  constructor() {
    this.PORT = config.port;
    this.APP = express();

    this.middleware();
  }

  middleware() {
    this.APP.use(cors({ origin: "*" }));
    this.APP.use(express.json());
    this.APP.use(express.urlencoded({ extended: true }));
  }

  routes() {}

  initServer() {
    return new Promise((resolve, reject) => {
      this.APP
        .listen(this.PORT)
        .on("listening", () => {
          resolve(true);
          console.log(`server init on port ${this.PORT}`);
        })
        .on("error", (error) => reject(error));
    });
  }
}

module.exports = Server
