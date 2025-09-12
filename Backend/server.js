const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/mongo.js");
app.use(express.json());


// ---  run once only at the time of dataset creation.
// const seedDb = require("./DatasetCreation/index.js")
// seedDb();

const updateEmbedding = require("./DatasetCreation/UpdateEmbedding.js")

dotenv.config();
connectDB();
updateEmbedding();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});