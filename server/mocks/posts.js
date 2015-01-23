module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  var token = 'auth-token-here';

  postsRouter.get('/', function(req, res) {
    if (req.headers['x-auth-token'] !== token) {
      res.status(401).end();
    }
    res.send({
      'posts': [{
        id: 1,
        title: "freestyle programming"
      }, {
        id: 2,
        title: "the ember way"
      }]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
