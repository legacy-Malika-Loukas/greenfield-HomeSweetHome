const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");

router.get("/", homeController.getAllHomes);
router.get("/:id", homeController.getOneHome);
router.post("/", homeController.postHome);
router.delete("/:id", homeController.deleteHome);
router.put("/:id", homeController.updateHome);
router.get("/:userId", homeController.getAllUserHomes);

module.exports = router;
