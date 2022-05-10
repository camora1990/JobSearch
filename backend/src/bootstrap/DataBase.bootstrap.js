const mongoose = require("mongoose");
const { config } = require("../config/config");
const countries = require("../data/defaultCountries");
const { countryModel } = require("../models");

class DataBase {
  #CONNECTION_STRING;
  #DB_CLIENT;
  constructor() {
    this.#CONNECTION_STRING = config.connection_string;
    this.#DB_CLIENT = mongoose.connection;
  }

  initialize() {
    return new Promise((resolve, reject) => {
      mongoose.connect(this.#CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      this.#DB_CLIENT.on("error", (error) => {
        reject(error);
      });
      this.#DB_CLIENT.on("open", () => {
        resolve(mongoose);
      });
    });
  }

  async closeConnection() {
    try {
      await this.#DB_CLIENT.close(true);
    } catch (error) {
      console.log(error);
    }
  }

  async initializeData() {
    try {
      this.#deleteData()
      await countryModel.insertMany(countries);
    } catch (error) {
      console.log(error);
    }
  }

  async #deleteData() {
    try {
      await countryModel.deleteMany()
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DataBase;
