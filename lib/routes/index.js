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
    console.log(err);
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

router.post('/aportacion', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  try {
    db.Aportacion.create({
      identidad: req.body.identidad,
      fechaDeIngreso: req.body.fecha,
      cantidad: req.body.cantidad
    }).then(() => {
      res.send(200);
    }).catch((err) => {
      console.log(err);
      res.send(400);
    });
  }
  catch (err) {
    console.log(err);
  }
  
});

router.get('/aportacion/:aportacion_id', jsonParser, (req, res) => {
  // if (!req.body) return res.sendStatus(400);
  try {
    db.Aportacion.findById(req.params.aportacion_id).then((aportacion) => {
      res.send(aportacion);
    });
  }
  catch (err) {
    res.send(400);
    res.send('error loading aportacion '+ err);
  }
});

router.get('/aportaciones', (req, res) => {
  if (!req.body) return res.sendStatus(400);
  try {
    db.Aportacion.findAll().then((aportacion) => {
      res.send(aportacion);
    });
  }
  catch (err) {
    res.send(400);
    res.send('error loading aportacion '+ err);
  }

});

router.get('/aportaciones/:fecha_1/:fecha_2', jsonParser, (req, res) => {
  // if (!req.body) return res.sendStatus(400);
  let where = {where: { fechaDeIngreso: {between: [req.params.fecha_1, req.params.fecha_2]},}};
  try {
    db.Aportacion.findAll(where).
      then((aportacion) => {
        res.send(aportacion);
      });
  }
  catch (err) {
    res.send(400);
    res.send('error loading aportacion '+ err);
  }
});

module.exports = router;