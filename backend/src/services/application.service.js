const { request, response } = require("express");
const responseMessage = require("../helpers/messages.helper");
const { applicationModel } = require("../models");
const { where } = require("../models/user.model");

class ApplicationService {
  async post(req = request, res = response) {
    const { user, offer,employer } = req.body;
    try {
      const application = new applicationModel({ user, offer ,employer});
      await application.save();
      const response = responseMessage(
        true,
        201,
        "successful application ",
        application
      );
      return res.status(200).json(response);
    } catch (error) {
      const response = responseMessage(false, 500, error.message);
      return res.status(500).json(response);
    }
  }

  async getOffert(req = request, res = response) {
    try {
      const a = await applicationModel.find({employer:"627d0de429fdfa8e182ff023"})
        // .aggregate([
        //   {
        //     $lookup: {
        //       from: "offer",
        //       localField: "offer",
        //       foreignField: "_id",
        //       as: "offer",
        //     },
        //   },
        //   {$match:{"offer.user":"627c73520e33121acf553116" }}
        // ])

        // .find({ offer: { user: "627c73520e33121acf553116" } })
        // .populate("offer");

      // const response = responseMessage(
      //   true,
      //   201,
      //   "successful application ",
      //   applications
      // );
      return res.status(200).json(a);
    } catch (error) {
      const response = responseMessage(false, 500, error.message);
      return res.status(500).json(response);
    }
  }
}

module.exports = ApplicationService;
