let router = require('express').Router();
let mocks = require('./mock');
let personalDetails = require('./data-row');

router.get('/personal_details', function (req, res, next) {
    res.json(personalDetails);
});

module.exports = router;
