const router = require('express').Router();

module.exports = router;

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

router.use('/request', require('./request'));

router.use((req, res, next) => {
    const error = new Error('Not Found');

    error.status = 404;
    next(error);
});
