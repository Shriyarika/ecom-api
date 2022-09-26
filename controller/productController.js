// const productData = require("../data/productData.json"); // data transfering
const ProductModel = require('../models/ProductModel')


const returnAllProducts = async(req, res) => {
    const productData = await ProductModel.find();
    const { category } = req.query; /// product? name j pani rakhna milxa  in query string
    if (category) {
        const filteredProducts = productData.filter((product) => {
            return product.category === category;
        });
        res.json(filteredProducts);
    } else {
        res.json(productData);
    }
}

const returnSingleProduct = async(req, res) => {
    const productData = await ProductModel.find();

    //1. Destructure productID from req.params
    const { productID } = req.params;
    //2. Filter product from the array
    const selectedProduct = productData.find((product) => {
        return product.id == productID; // numner use garryo vanne === Number(productId)
    });
    if (selectedProduct) {
        res.json(selectedProduct);
    } else {
        res.send("Index doesn't exist");
    }
}



const createProduct = async(req, res) => {
    // console.log(req.body); //data request pathaune
    // res.send("Data Received"); // respond 
    try {
        const result = await ProductModel.create(req.body);
        res.json(result); // postman lai data pathako 
    } catch (err) {
        res.json(err);
    }
};
const updateProduct = async(req, re) => {
    const { productID } = req.params;
    try {
        // const result = await ProductModel.findByIdAndUpdate(productID, req.body);
        const result = await ProductModel.findByIdAndUpdate(productID, req.body); //filter by the given ID

        res.json(result);
    } catch (err) {
        res.json(err);
    }
};
const deleteProduct = async(req, re) => { // async rakhe poxi await compulsory
    const { productID } = req.params;
    try {
        const result = await ProductModel.findByIdAndDelete(productID);
        res.json(result);
    } catch (err) {
        res.json(err);
    }
};

module.exports = { returnAllProducts, returnSingleProduct, createProduct, updateProduct, deleteProduct };