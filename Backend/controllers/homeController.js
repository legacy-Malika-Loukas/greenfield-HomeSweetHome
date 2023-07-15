const HomeModel = require("../models/homeModel");

const createHome = (req, res) => {
  HomeModel.create(req.body)
    .then((homes) => res.json(homes))
    .catch((error) => res.json(error));
};

const getHomeById = async (req, res) => {
  try {
    const home = await HomeModel.findById(req.params.id);
    res.status(200).json(home);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllHomes = (req, res) => {
  HomeModel.find({})
    .then((homes) => res.json(homes))
    .catch((error) => res.json(error));
};

const getHome = (req, res) => {
  const id = req.params.id;
  HomeModel.findById({ _id: id })
    .then((homes) => res.json(homes))
    .catch((error) => res.json(error));
};

const updateHome = (req, res) => {
  const id = req.params.id;
  HomeModel.findByIdAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      city: req.body.city,
      address: req.body.address,
      text: req.body.text,
      price: req.body.price,
      image: req.body.image,
    },
    { new: true } // Return the updated document
  )
    .then((homes) => res.json(homes))
    .catch((error) => res.json(error));
};

const deleteHome = (req, res) => {
  const id = req.params.id;
  HomeModel.findByIdAndDelete({ _id: id })
    .then((home) => {
      if (!home) {
        return res.status(404).json({ message: "Home not found" });
      }
      res.json(home);
    })
    .catch((error) => res.json(error));
};

module.exports = {
  createHome,
  getHomeById,
  getAllHomes,
  getHome,
  updateHome,
  deleteHome,
};
