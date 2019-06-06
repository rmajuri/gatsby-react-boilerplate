const express = require('express');

const debug = require('debug')('api');

const app = new express();

// Express configs
require('./config/express')(app);

// Start app
app.listen(process.env.PORT || 8080, (error) => {
    if (!error) {
        debug(`📡  Running on port: ${process.env.PORT || 8080}`);
    }
});
