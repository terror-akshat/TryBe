const { fetchProductImage, getImage } = require("../controllers/productController");
const { registerUser, userLogin } = require("../controllers/userControllers");

const router = require("express").Router();

// user registeration and login.
router.post("/register", registerUser);
router.post("/login", userLogin);

// image fetching
router.get("/fetch-Image", fetchProductImage);
router.get("/image/:id", getImage)

module.exports = router;