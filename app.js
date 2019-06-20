const serverless = require('serverless-http');
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const bookRouter = require('./routes/book');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({strict: false}));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api', bookRouter);

// 404 Error handler
app.use((req, res, next) => {
    let err = new Error('404: Not Found');
    err.status = 404;
    next(err);
});

// API Error Handler
app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({error: err});
});


module.exports.server = serverless(app);
