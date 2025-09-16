const {
  fetchProductImage,
  vibeSerach,
  productVideoUpload,
  fetchSingleProduct,
  fetchAllVideo,
  fetchTitle,
  vibeSearchVideo,
  tagSearch,
} = require("../controllers/productController");
const { registerUser, userLogin } = require("../controllers/userControllers");

const router = require("express").Router();

// user registeration and login.
router.post("/register", registerUser);
router.post("/login", userLogin);

// image fetching
router.get("/fetch-Image", fetchProductImage);
router.get("/vibe-search", vibeSerach);
router.get("/fetch-single-product/:id", fetchSingleProduct);
router.get("/fetch-video", fetchAllVideo);
router.get("/fetch-title", fetchTitle);
router.get("/vibe-search-video", vibeSearchVideo);
router.get("/tag-search", tagSearch);

router.post("/upload-video", productVideoUpload);

module.exports = router;
