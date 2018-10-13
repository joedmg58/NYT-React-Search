var express = require('express');
var router = express.Router();
var apiRoutes = require('./articles');

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});

router.use("/api", apiRoutes);

router.get('/', function(req, res, next) {
  console.log('GET request for home page');

  //res.sendFile(path.join(__dirname, "../client/build/index.html"));
  res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = router;
