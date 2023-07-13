const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MongoDB_URI;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = mongoose
  .connect(uri, connectionParams)
  .then(() => console.log("Connected to database"))
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

module.exports = connection;
