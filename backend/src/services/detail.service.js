const { request, response } = require("express");

const { offerModel } = require("../models");

class detailService {
  async get(req = request, res = response) {
    
    const { id } = req.body.id;
    const detail = new offerModel({ empresa, tittle, detail, city, category });

    try {
      await offerModel.findOne(id);
      return res.status(200).json(response);
    } catch (error) {
      const response = responseMessage(false, 404, error.message);
      return res.status(404).json(response);
    }
  }
}

module.exports = offerService;