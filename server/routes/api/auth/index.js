const router = require('express').Router();
const {
    signup,
    signin,
} = require('./auth.controller');
const {
    response,
} = require('../../util');

router.get('/', (req, res, next) => {
    res.send('api auth');
});

router.post('/signup', signup.validate, signup.valdiateResult, signup.execute, response);
router.post('/signin', signin.validate, signin.valdiateResult, signin.execute, response);

module.exports = router;