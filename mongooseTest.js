var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/productData");

var db = mongoose.connection;
db.on('err', console.error.bind(console, 'err in connection'));
db.once('open', () => (console.log('successful connection')));

//create schema for productCheckout;
var schema = new mongoose.Schema({
    id: Number,
    itemName: String,
    price: Number,
    description: String,
    colors: String,
    inventory: Number,
    views: Number,
    shippingCost: Number,
    shoppingCart: {
        link: String
    },
    shoppingCart: String,
    user: String
})
//schema for shopping bag
var cartSchema = new mongoose.Schema({
    id: Number, 
    itemName: String,
    color: String,
    price: Number
})
//actually making the table using the schema created above
var productList = mongoose.model('productLists', schema)
var shoppingCart = mongoose.model('shopCart'. cartSchema)
var colors = ['red', 'blue', 'green', 'black', 'orange', 'yellow', 'white', 'brown', 'cheastnut', 'navy', 'grey'];
colorIndex = Math.rand() * colors.length;
for(var i = 0; i < 100; i++){
    var data = {
        id: i,
        itemName: '',
        price: Math.rand()*200,
        description: 'this is dumb data',
        colors: colors[colorIndex],
        inventory: Math.floor(Math.rand()*10),
        views: Math.floor(Math.rand()*150),
        shippingCost: Math.floor(Math.rand()*25),
        user: ''
    }
    productList.insert(data);
}
// going to be empty until item is added to bag.
var shopData = {
    id: null,
    itemName: '',
    price: null,
    color: '',
    total: null
}
//mongo command to insert data into database
shoppingCart.insert(shopData);
//insrtMany takes in an array, so it needs to be an array of objects.

