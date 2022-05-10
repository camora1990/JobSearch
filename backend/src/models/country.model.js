const { Schema, model } = require("mongoose");

const countrySchema = new Schema({
  country: {
    type: String,
    required: true,
  },
});

module.exports = model("Country",countrySchema);
