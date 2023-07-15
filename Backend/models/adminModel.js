const mongoose = require ("mongoose");

const AdminSchema = new mongoose.Schema({
  email : {type: String, require: true},
  password: {type: String, required: true},
})

const AdminModel = mongoose.model("admin", AdminSchema);

module.exports = AdminModel;
