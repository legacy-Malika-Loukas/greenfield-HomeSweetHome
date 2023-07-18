const router = require ("express").Router();
const adminController = require("../controllers/adminController")

router.post("/signup", adminController.adminSignUp);
router.post("/login", adminController.adminLogin);
router.post("/verify", adminController.verifyAdmin);
router.post("/", adminController.addAdmin);
router.delete("/user/:userId", adminController.deleteUser);
router.delete("/admins/:adminId", adminController.deleteAdmin);
router.delete("/home/:id", adminController.deleteHome);
router.get("/users", adminController.getAllUsers);
router.get("/admins", adminController.getAllAdmins);
router.get("/user/:userId/homes", adminController.getAllUserHomes);


module.exports = router