const mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({

  title: String,
  category: String,
  size: String,
  description:String,
  price: Number,
  image: String



});
const PropertyMode = mongoose.model("Gore_Data", propertySchema);
module.exports = PropertyMode