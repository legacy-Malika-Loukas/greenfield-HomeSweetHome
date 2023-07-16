const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");

router.post("/post", homeController.createHome);
router.get("/:id", homeController.getHomeById);
router.get("/", homeController.getAllHomes);
router.get("/getHome/:id", homeController.getHome);
router.put("/updateHome/:id", homeController.updateHome);
router.delete("/deleteHome/:id", homeController.deleteHome);
router.get("/:userId", homeController.getAllUserHomes);

module.exports = router;
