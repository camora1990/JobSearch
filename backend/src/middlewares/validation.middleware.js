const { request, response } = require("express");
const responseMessage = require("../helpers/messages.helper");
const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

const validateJWT = (req = request, res = response, next) => {
  if (!req.header("Authorization")) {
    const response = responseMessage(false, 401, "unauthorized user");
    return res.status(401).json(response);
  }
  try {
    const token = req.header("Authorization").split(" ");
    if (token.length < 2) {
      const response = responseMessage(false, 401, "invalid token");
      return res.status(401).json(response);
    }
    const payload = jwt.verify(token[1], config.private_jwt);
    req.payload = payload;
  } catch (error) {
    const response = responseMessage(
      false,
      401,
      `Invalid token ${error.message}`
    );
    return res.status(401).json(response);
  }
  next();
};
const validateRoleEmployeer = (req = request, res = response, next) => {
  if (req.payload.role !== "EMPLOYER") {
    const message = responseMessage(false, 401, "unauthorized user");

    return res.status(401).json(message);
  }
  next();
};

const validateRoleAdmin = (req = request, res = response, next) => {
  if (req.payload.role !== "ADMIN") {
    const message = responseMessage(false,401,"unauthorized user")
    return res.status(401).json(message)
  }
  next()
};

module.exports = {
  validateJWT,
  validateRoleEmployeer,
  validateRoleAdmin
};
