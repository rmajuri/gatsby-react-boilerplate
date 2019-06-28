const express = require('express');

const debug = require('debug')('api');

const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api'));

// Express configs
require('./config/express')(app);

// Start app
app.listen(process.env.PORT || 8080, (error) => {
    if (!error) {
        debug(`📡  Running on port: ${process.env.PORT || 8080}`);
    }
});
