const mongoose = require ("mongoose");
const main = require("./connection.js");
const User = mongoose.model ("User", {
    email : String,
    password: String,
});

module.exports = User;
