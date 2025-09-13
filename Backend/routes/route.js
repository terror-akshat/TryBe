const { registerUser, userLogin } = require("../controllers/userControllers");

const router = require("express").Router();

// user registeration and login.
router.post("/register", registerUser);
router.post("/login", userLogin);




module.exports = router;