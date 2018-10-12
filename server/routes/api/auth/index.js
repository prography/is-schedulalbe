const router = require('express').Router();
const {
    signup,
    signin,
} = require('./auth.controller');
const {
    response,
} = require('../../../utils');
const {
    validationResult
} = require('../../../utils/validators');

router.get('/', (req, res, next) => {
    res.send('api auth');
});

router.post('/signup', signup.validate, validationResult, signup.run, response);
router.post('/signin', signin.validate, validationResult, signin.run, response);

module.exports = router;