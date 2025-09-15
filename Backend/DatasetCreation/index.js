const {Products} = require("../Schema/databaseSchema.js");
const dataSet = require("./data.json");
const dotenv = require("dotenv");
dotenv.config();

const seedDb = async () => {
  try {
    await Products.deleteMany({});
    await Products.insertMany(dataSet.products);
    console.log("Dataset inserted successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

module.exports = seedDb;