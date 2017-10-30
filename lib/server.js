import express from 'express';
import routes from './routes/index';
import config from 'config';
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./models');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
db.
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err); 
  });

// db.Aportacion.belongsTo(db.User, {foreignKey: 'identidad'});

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', routes);
// db.Aportacions.belongsTo(db.Users, {foreignKey: 'identidad'});

app.get('/', async (req, res) => {
  res.render('index');
});


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(process.env.PORT || 18080, function listenHandler() {
  console.info(`Running on ...` + process.env.PORT);
});
