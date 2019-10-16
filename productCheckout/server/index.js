const express = require('express');
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');
const routes = require('./router/routes.js');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/productCheckout', {useMongoClient: true});

app.use(express.static(__dirname + '/../client/dist'));
app.use(routes)
app.use(bodyParser.json());

app.listen(PORT, () => {console.log('Listening on port', PORT)});