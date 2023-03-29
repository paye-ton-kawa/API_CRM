const express = require("express");
require("dotenv").config();
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER,
  tokenSigningAlg: process.env.JWT
});

// enforce on all endpoints
app.use(jwtCheck);

// Configurations
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

// Routes
const {
	getCustomers,getCustomersById,getProduitsByCustomerId
} = require("./main/controllers/customer");

app.get("/api/v1/customer/:id/orders/products",getProduitsByCustomerId);
app.get("/api/v1/customer/:id/orders",getCustomersById);
app.get("/api/v1/customer/",getCustomers);

app.listen(process.env.port);
exports.app = app;
console.log('Running on port '+ process.env.port);