const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Category = require("../models/category");
const mongoose = require("mongoose");
const connectDB = require("../config/db");
connectDB();

async function seedDB() {
  async function seedCateg(titleStr) {
    try {
      const categ = await new Category({ title: titleStr });
      await categ.save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }
  await seedCateg("Lounge Wear");
  await seedCateg("Sports Wear");
  await seedCateg("Street Wear");
  await seedCateg("Tops");
  await seedCateg("Shirts & Blouses");
  await seedCateg("Sweatshirts & Hoodies");
  await seedCateg("Knitwear");
  await seedCateg("Jackets & Coats");
  await seedCateg("Denim & Jeans");
  await seedCateg("Trousers & Pants");
  await seedCateg("Skirts");

  await closeDB();
}

seedDB();
