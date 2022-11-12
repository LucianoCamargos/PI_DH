let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');


let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let userProfileRouter = require('./routes/userProfile');
let createUsers = require('./routes/userProfile');
let productRouter = require('./routes/product')
let loginCreate = require('./routes/login')

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//minhas rotas
app.use('/', indexRouter);
app.use('/userProfile', userProfileRouter)
app.use('/product', productRouter)
app.use('/login', loginCreate)
app.use('/criarNovo', createUsers)

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
