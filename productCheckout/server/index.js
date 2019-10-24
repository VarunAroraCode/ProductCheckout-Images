const express = require('express');
const app = express();
const PORT = 4000;
//const mongoose = require('mongoose');
const routes = require('./router/routes.js');
const bodyParser = require('body-parser');
//var cors = require('cors')
const productList = require('../database/index.js')

//needed to 
//app.use('/:productId/checkout', express.static(__dirname + '/../client/dist'));
app.use('/:productID', express.static(__dirname+ '/../client/dist'));
// app.use('/api/:productID',express.static(__dirname + '/../client/dist'));

app.get("/api/:productID", (req, res) => {
    productList.find({id: req.params.productID})
    .then((data) => res.send(data));
})
app.listen(PORT, () => {console.log('looking on port', PORT)});