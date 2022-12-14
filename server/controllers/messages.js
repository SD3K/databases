var models = require('../models');

module.exports = {

  get: function (req, res) {
    models.messages.getAll(function(err, results) {
      if (err) {
        console.error('Unable to retrieve messages from the database: ', err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    var params = [req.body.message, req.body.username, req.body.roomname];
    models.messages.create(params, function(err, results) {
      if (err) {
        console.error('Unable to post messages to the database: ', err);
        res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  }
  };
