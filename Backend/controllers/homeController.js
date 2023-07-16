const HomeModel = require("../models/homeModel");

const postHome = async (req, res) => {
  await HomeModel.create(req.body)
  res.send({msg: "Home posted successfully"})
};

const getAllHomes = async (req, res) => {
  let homes = await HomeModel.find();
  res.send(homes)
};

// const getOneHome = async (req, res) => {
//   const home = await HomeModel.findOne({_id: req.params.id})
//   res.send(home)
 
// };

const updateHome = async (req, res) => {
  await HomeModel.findByIdAndUpdate({_id: req.params.id}, req.body)
  res.send({msg: "Home updated successfully"})
};

const deleteHome = async (req, res) => {
  await HomeModel.deleteOne({_id: req.params.id});
  res.send({msg: "Home deleted successfully"})
};

const getAllUserHomes = async (req, res)=> {
  try {
    const homes = await HomeModel.find({userId: req.params.userId});
    console.log(homes)
    res.send(homes);
  } catch (error) {
    console.log("Error in getting user's all home", error);
  }
 
}
  


module.exports = {
  postHome,
  getAllHomes,
  // getOneHome,
  updateHome,
  deleteHome,
  getAllUserHomes,
};
