const { Schema, model } = require("mongoose");
const { encryptPassword } = require("../helpers/bcrypt.helper");

const validRoles = ["ADMIN", "EMPLOYER", "USER"];

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: validRoles,
      default: "USER",
      message: "Invalid role [ADMIN, EMPLOYER, USER]",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    this.password = await encryptPassword(this.password);
    next();
  } catch (error) {
    console.log("error en preUserschema", error);
  }
});

userSchema.methods.toJSON = function () {
  const { password, __v, ...user } = this.toObject();
  return user;
};

module.exports = model("User", userSchema);
