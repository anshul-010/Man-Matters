const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: [String],
    price: Number,
    title: String,
    for: String,
    stage: { type: mongoose.Schema.Types.Mixed },
    with: String,
    category: String,
    rating: Number,
    newlaunch: Boolean,
},{
    versionKey:false
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = {ProductModel};
