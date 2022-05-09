const { Schema, model } = require("mongoose");

const validCategory = ["FrontEnd", "BackEnd", "JavaScript" , "Python"];
// const validMode = ["Presencial", "Remoto", "Hibrido" ];

const offerSchema = new Schema(
  {   
    empresaID: {     // lo dejo acá ya para rapido acceso o se obtiene porla relación?
      type: String,
      required: true,
    },
    tittle: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    // mode: {
    //   type: String,
    //   required: true,
    //   enum: validMode,
    //   default: "Hibrido",
    //   message: "Invalid Mode [Presencial, Remoto, Hibrido]",     
    // },
    // country: {
    //   type: String,
    //   required: true,
    // },
    city: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: validCategory,
      default: "JavaScript",
      message: "Invalid Category [FrontEnd, BackEnd, JavaScript, Python]",
    },
  },
  { timestamps: true }
);


module.exports = model("offer", offerSchema);


