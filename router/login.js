var express = require('express');
var router = express.Router();

router.route('/doLogin')
    .get(function (req, res, next) {
        res.json(req.body);
    })
    .put(function (req, res, next) {
        res.json(req.body);
    })
    .post(function (req, res, next) {
        res.cookie('as', 'ccccccc', {
            httpOnly: true,
        });
        res.json(req.body);
    })
    .delete(function (req, res, next) {
        res.json(req.body);
    });

module.exports = router;