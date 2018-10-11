const router = require('express').Router();
const controller = require('./auth.controller');
const util = require('../../util');
const {
    response
} = util;

router.get('/', (req, res, next) => {
    res.send('api auth');
});

router.post('/signup', controller.signup, response);
router.post('/signin', controller.signin, response);

module.exports = router;