'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _config3 = require('./config');

var _config4 = _interopRequireDefault(_config3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./models');
const app = (0, _express2.default)();

app.set('view engine', 'ejs');
app.use(_express2.default.static('public'));
console.log(_config2.default.get('enviroment'));
db.sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

// db.Aportacion.belongsTo(db.User, {foreignKey: 'identidad'});

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', _index2.default);
// db.Aportacions.belongsTo(db.Users, {foreignKey: 'identidad'});

app.get('/', async (req, res) => {
  // const initialContent = await serverRender();
  res.render('index');
});

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen('8080', function listenHandler() {
  console.info(`Running on ...`);
});