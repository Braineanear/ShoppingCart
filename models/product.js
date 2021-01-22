const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productCode: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
  manufacturer: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Available', 'Not Available'],
    default: 'Available',
    required: true,
  },
  size: {
    type: String,
    enum: ['Small', 'Medium', 'Large', 'XLarge', 'XXLarge'],
    default: 'M',
    required: true,
  },
  color: {
    type: String,
    default: 'black',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
