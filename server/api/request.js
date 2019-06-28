const router = require('express').Router();
const Request = require('../db/models/request');

module.exports = router;

router.post('/', async (req, res, next) => {
    try {
        const newRequest = await Request.create(req.body);

        res.status(201).json(newRequest);
    } catch (error) {
        next(error);
    }
});
