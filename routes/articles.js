var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET articles listing. */
router.get('/articles', function(req, res) {

  console.log("Retreiving articles...");

  db.Article.find({})
    .sort({ date: -1 }) //ordered by date
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

});


// SAVE article
router.post('/articles', function(req, res) {

  console.log("Saving article...");

  db.Article.findOne({ Id: req.body.Id })
    .then(function (response) {
      if (response === null) { // Only Create Article if it dosen't exit in DB yet
        db.Article.create(req.body).then((response) =>{
          console.log('Article created in DB');
          res.send('Article sucessfully Saved!');
        })
    .catch(err => res.json(err));
      } //if
    })

});


//DELETE article
router.delete('/articles', function(req, res) {

  console.log("Deleting article...");

  db.Article.remove({ articleId: req.body.Id }, (err) => {
            
    if (err) throw err;

    console.log("Article sucessfully Deleted");

    db.Article.find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel)) //responding with the all articles that remain
      .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));

});

module.exports = router;
