const Product = require("../models/productModel");

// @desc   Gets all products
// @route  GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

// @desc   Gets single product
// @route GET /api/product/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}

// @desc   Add a new product
// @route POST /api/products
async function createProduct(req, res) {
  try {
    const product = {
      title: "Test Product",
      description: "This is my new product",
      price: 100,
    };
    const newProduct = await Product.create(product);
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
