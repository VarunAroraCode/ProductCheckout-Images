const productList = require("./index.js");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productData', {
    useMongoClient: true
});
itemData = [];
var item = ['shoe', 'hat', 'shirt', 'watch', 'pair of pants'];

var colors = ['red ', 'blue ', 'green ', 'black ', 'orange ', 'yellow ', 'white ', 'brown ', 'cheastnut ', 'navy ', 'grey '];
colorIndex = Math.floor(Math.random() * colors.length);
const seedDb = () => {
    for(var i = 1; i < 101; i++){
        colorIndex = Math.random() * colors.length;
        var data = {
            id: i,
            itemName: colors[colorIndex] + item[Math.floor(Math.random() * 5)],
            brandName: 'hello',
            price: Math.random()*200,
            description: 'this is a nice ' + item[Math.floor(Math.random() * 5)],
            colors: colors[colorIndex],
            inventory: Math.floor(Math.random()*10),
            views: Math.floor(Math.random()*150),
            shippingCost: Math.floor(Math.random()*25),
        }
        itemData.push(data);
    }
}
seedDb();
productList.insertMany(itemData);