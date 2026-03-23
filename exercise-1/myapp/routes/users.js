var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Set up body-parser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Existing GET route
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// ✅ Add this POST route
router.post('/', function(req, res) {
  console.log(req.body);   // logs params in terminal
  res.send('POST received!');
});

module.exports = router;