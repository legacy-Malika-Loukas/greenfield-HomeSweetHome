const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
});

const HomeModel = mongoose.model("homes", HomeSchema);

module.exports = HomeModel;
