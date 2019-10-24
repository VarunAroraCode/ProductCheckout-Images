const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productData', {
    useMongoClient: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {console.log('Successful connection to database!')});

var schema = new mongoose.Schema({
    id: Number,
    itemName: String,
    brandName: String,
    price: Number,
    description: String,
    colors: String,
    inventory: Number,
    views: Number,
    shippingCost: Number
})
var productList = mongoose.model('productLists', schema)

// const getProductById = (productId, callback) => {
//     productList.find(id : productId)
//     .exec(callback)
// }
 module.exports = productList;
