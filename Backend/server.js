const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/mongo.js");
const ApiRoute = require("./routes/route.js");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
// ---  run once only at the time of dataset creation.
// const seedDb = require("./DatasetCreation/index.js")
// seedDb();

// run only once for making embedding.
// const updateEmbedding = require("./DatasetCreation/UpdateEmbedding.js")
// updateEmbedding();

app.use("/api/", ApiRoute);

dotenv.config();
connectDB();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
