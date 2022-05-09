const { request, response } = require("express");
// hay algun helper acá? como hallar los paises / ciudades , o es tarea del front
const { userModel } = require("../models");

class offerService {
  async post(req = request, res = response) {
    
    const { empresa, tittle, detail, city, category  } = req.body;
    const offer = new offerModel({ empresa, tittle, detail, city, category });

    try {
      await offer.save();
      const response = responseMessage(true, 200, "offer created", {
        offer: offer,
      });
      return res.status(200).json(response);
    } catch (error) {
      const response = responseMessage(false, 500, error.message);
      return res.status(200).json(response);
    }
  }
}

module.exports = offerService;