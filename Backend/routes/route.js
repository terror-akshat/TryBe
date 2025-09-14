const {
  fetchProductImage,
  vibeSerach,
} = require("../controllers/productController");
const { registerUser, userLogin } = require("../controllers/userControllers");

const router = require("express").Router();

// user registeration and login.
router.post("/register", registerUser);
router.post("/login", userLogin);

// image fetching
router.get("/fetch-Image", fetchProductImage);
router.get("/vibe-search", vibeSerach);

module.exports = router;
