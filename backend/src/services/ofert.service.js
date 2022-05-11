const { request, response } = require("express");
const responseMessage = require("../helpers/messages.helper");
const { offerModel } = require("../models");

class OfferService {
  async post(req = request, res = response) {
    const { name, country, category, details } = req.body;
    const user = req.payload.id
    try {
      const offer = new offerModel({ name, country, category, details, user });
      await offer.save();
      const response = responseMessage(true, 201, "Offer created", offer);
      return res.status(201).json(response);
    } catch (error) {
      const response = responseMessage(false, 500, error.message);
      return res.status(500).json(response);
    }
  }

  async getOffertByUser(req = request, res = response) {
    const {id} = req.params
    try {
      const offers = await offerModel
        .find({ user: id })
        .populate(["user", "category", "country"]);
      const response = responseMessage(true, 201, "Offerts", offers);
      return res.status(200).json(response);
    } catch (error) {
      const response = responseMessage(false, 500, error.message);
      return res.status(500).json(response);
    }
  }
}

module.exports = OfferService;