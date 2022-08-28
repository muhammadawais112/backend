const mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({

  title: String,
  location: String,
  type: String,
  size: String,
  price: Number,
  image: String



});
const PropertyMode = mongoose.model("propertyData", propertySchema);
module.exports = PropertyMode