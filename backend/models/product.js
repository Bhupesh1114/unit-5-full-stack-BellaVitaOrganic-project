const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title: String,
    category: {
        type: String,
        enum : ["skincare", "haircare","bodycare","perfume"]
    },
    subCategory: [String],
    quantity: String,
    price: Number,
    stkPrice: Number,
    rating: Number,
    description: String,
    imageUrl : String
})

const productModel = mongoose.model("product", productSchema);


module.exports = productModel;