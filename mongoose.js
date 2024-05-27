require('dotenv').config();

const mongoose = require('mongoose');

const Product = require('./models/product');

const url = process.env.DATABASE_URL;

mongoose.connect(
  url
).then(() => {
    console.log('Connected to database');
}).catch(() => {
    console.log('Connection failed');
});

const createProduct = async (req, res, next) => {
    const createProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });

    const result = await createProduct.save();

    res.json(result);
};

const getProducts = async (req, res, next) => {
    const result = await Product.find().exec();
    res.json(result);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;