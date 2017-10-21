var express = require('express');
var router  = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
router.get('/users', (req, res) => {
  db.User.findAll().then((users) => {
    res.send(users);
  });
});

router.get('/user/:user_id', (req, res) => {
  try {
    db.User.findById(req.params.user_id).then((users) => {
      res.send(users);
    });
  }
  catch (err) {
    res.send(400);
       res.send('error loading users '+ err);
  }
});

router.post('/user', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  try {
    db.User.create({
    identidad: req.body.identidad,
    fullName: req.body.name,
    email: req.body.email,
    numeroTelefono: req.body.number,
    direccion: req.body.direccion
   }).then(() => {
      res.send(200);
    }).catch((err) => {
        console.log(err);
        res.send(400);
      });
  }
  catch (err) {
    console.log(err)
  }
  
});

router.put('/user/:user_id', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  db.User.findById(req.params.user_id).then((item) => {
    return item.update(req.body).then((self) => {
      res.send(self);
    });
  });
});

module.exports = router;