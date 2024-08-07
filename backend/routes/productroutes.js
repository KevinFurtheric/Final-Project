const express = require("express");
const {
  createProduct,
  getAllProducts,
} = require("../controllers/productcontroller");
const router = express.Router();

router.post("/products", createProduct);
router.get("/products", getAllProducts);

module.exports = router;
