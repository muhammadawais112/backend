const mongoose = require("mongoose");
const { Schema } = mongoose;

const authScmeha = new Schema({

    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
  




});
const AuthModel = mongoose.model("userAuth", authScmeha);
module.exports = AuthModel