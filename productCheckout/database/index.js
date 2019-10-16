const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productCheckout', {
    useMongoClient: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {console.log('Successful connection to database!')});

//random data generators
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

//settings for LoremIpsum data generator
const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 4,
    min: 2
  }
});
var productList = mongoose.model('productLists', schema)
var shoppingCart = mongoose.model('shopCart'. cartSchema)

var schema = new mongoose.Schema({
    id: Number,
    itemName: String,
    price: Number,
    description: String,
    colors: String,
    inventory: Number,
    views: Number,
    shippingCost: Number
})
//schema for shopping bag
var cartSchema = new mongoose.Schema({
    id: Number, 
    itemName: String,
    color: String,
    price: Number
})


var colors = ['red', 'blue', 'green', 'black', 'orange', 'yellow', 'white', 'brown', 'cheastnut', 'navy', 'grey'];
colorIndex = Math.rand() * colors.length;
const seedDb = () => {
    for(var i = 0; i < 100; i++){
        colorIndex = Math.rand() * colors.length;
        var data = {
            id: i,
            itemName: lorem.generateWords(Math.floor(Math.random() * 5)),
            price: Math.rand()*200,
            description: lorem.generageWords(Math.floor(Math.random() * 10) * 2),
            colors: colors[colorIndex],
            inventory: Math.floor(Math.rand()*10),
            views: Math.floor(Math.rand()*150),
            shippingCost: Math.floor(Math.rand()*25),
        }
        productList.insert(data);
    }
}
//actually making the table using the schema created above
// going to be empty until item is added to bag.
var shopData = {
    id: null,
    itemName: '',
    price: null,
    color: '',
    total: null
}
//mongo command to insert data into database
seedDb();

module.exports = Checkout;
shoppingCart.insert(shopData);