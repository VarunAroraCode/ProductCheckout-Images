const productList = require("./index.js");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productData', {
    useMongoClient: true
});
itemData = [];
var item = ['Shoe', 'Hat', 'Shirt', 'Watch', 'Pair of Pants'];

var colors = ['Red ', 'Blue ', 'Green ', 'Black ', 'Orange ', 'Yellow ', 'White ', 'Brown ', 'Cheastnut ', 'Navy ', 'Grey '];
var brand = ['Gucci', 'Prada', 'Louis Vuiton', 'Clarks', 'Burberry', 'Saint Laurent', 'Fendi', 'Tommy Hilfiger', 'Kennith Cole', 'Kohls', 'Arizona']
const seedDb = () => {
    for(var i = 1; i < 101; i++){
        var data = {
            id: i,
            itemName: colors[Math.floor(Math.random()*11)] + item[Math.floor(Math.random() * 5)],
            brandName: brand[Math.floor(Math.random() * brand.length)],
            price: (Math.random()*200).toFixed(2),
            description: 'this is a nice ' + item[Math.floor(Math.random() * 5)],
            colors: colors[Math.floor(Math.random()*11)],
            inventory: Math.floor(Math.random()*10),
            views: Math.floor(Math.random()*150),
            shippingCost: Math.floor(Math.random()*25),
        }
        itemData.push(data);
    }
}
seedDb();
productList.insertMany(itemData);
