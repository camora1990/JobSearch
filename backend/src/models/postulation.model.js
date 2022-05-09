const { Schema, model } = require("mongoose");

const postulationSchema = new Schema(
  {   
    offerID: {     // lo dejo acá ya para rapido acceso o se obtiene porla relación?
      type: String,
      required: true,
    },
    userID: {     // lo dejo acá ya para rapido acceso o se obtiene porla relación?
        type: String,
        required: true,
      },
 
  { timestamps: true }
);

module.exports = model("postulation", postulationSchema);