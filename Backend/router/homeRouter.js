const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");

router.get("/", homeController.getAllHomes);
router.post("/", homeController.postHome);
router.delete("/:id", homeController.deleteHome);
router.put("/:id", homeController.updateHome);
router.get("/:userId", homeController.getAllUserHomes);
router.get("/home/:id", homeController.getOneHome)
router.get("/search/:city", homeController.searchByCity);

module.exports = router;
