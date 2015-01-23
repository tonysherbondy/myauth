module.exports = function(app) {
  var express = require('express');
  var authRouter = express.Router();

  authRouter.get('/', function(req, res) {
    res.send({
      'authToken': 'auth-token-here'
    });
  });

  authRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  authRouter.get('/:id', function(req, res) {
    res.send({
      'auth': {
        id: req.params.id
      }
    });
  });

  authRouter.put('/:id', function(req, res) {
    res.send({
      'auth': {
        id: req.params.id
      }
    });
  });

  authRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/auth', authRouter);
};
