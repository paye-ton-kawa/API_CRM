const express = require('express');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');
const { requiredScopes } = require('express-oauth2-jwt-bearer');
const checkScopes = requiredScopes('read:messages');
const port = process.env.PORT || 3030;

const jwtCheck = auth({
  audience: 'https://web-shop-api/',
  issuerBaseURL: 'https://dev-cjxhb-x9.eu.auth0.com/',
  tokenSigningAlg: 'RS256'
});

// enforce on all endpoints
app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

// server.js

// This route doesn't need authentication
app.get('/api/public', function(req, res) {
    res.json({
      message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
    });
  });
  
  // This route needs authentication
app.get('/api/private', jwtCheck, function(req, res) {
    res.json({
      message: 'Hello from a private endpoint! You need to be authenticated to see this.'
    });
});

  
app.get('/api/private-scoped', jwtCheck, checkScopes, function(req, res) {
    res.json({
      message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
    });
});

app.listen(port);

console.log('Running on port ', port);