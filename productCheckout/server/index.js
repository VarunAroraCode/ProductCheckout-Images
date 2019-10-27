const express = require('express');
const app = express();
const PORT = 4002;
//const mongoose = require('mongoose');
const routes = require('./router/routes.js');
const bodyParser = require('body-parser');
const productList = require('../database/index.js')

app.use(express.static(__dirname + '/../client/dist'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', ['*']);
    next();
  });

app.use('/:productID', express.static(__dirname + '/../client/dist'));
// app.use('/api/:productID',express.static(__dirname + '/../client/dist'));

app.get("/api/:productID", (req, res) => {
    productList.find({id: req.params.productID})
    .then((data) => res.send(data));
})
app.listen(PORT, () => {console.log('looking on port', PORT)});
