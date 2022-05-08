const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  try {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  encryptPassword,
};
