const mongoose = require('mongoose');

const productSchema = mongoose.Schema({ // Structure define gareko
    title: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    description: {
        type: String,
        minlength: 100
    },
    category: {
        type: String
    },

    image: {
        type: String
    },
    rating: {
        rate: {
            type: String
        },
        count: {
            type: Number
        }
    }


})
const ProductModel = mongoose.model('product', productSchema); // product module
module.exports = ProductModel;