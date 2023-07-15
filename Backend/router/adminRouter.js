const router = require ("express").Router();
const adminController = require("../controllers/adminController")

router.post("/signup", adminController.adminSignUp);
router.post("/login", adminController.adminLogin);
router.post("/verify", adminController.verifyAdmin);

module.exports = router