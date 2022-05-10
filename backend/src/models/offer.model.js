const { Schema, model } = require("mongoose");

const offerSchema = new Schema(
  {
    offer: {
      type: String,
      required: true,
    },
    employer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    country: {
      type: String,
      require: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categoty",
    },
  },
  { timestamps: true }
);

module.exports = model("offer", offerSchema);
