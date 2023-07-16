const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  city: {  type: String, required: true},
  address: { type: String, required: true},
  description: { type: String, required: true },
  price: { type: Number, required: true},
  userId: String,
//   openSpots: { type: Number, required: false},
});

const HomeModel = mongoose.model("homes", HomeSchema);

module.exports = HomeModel;
