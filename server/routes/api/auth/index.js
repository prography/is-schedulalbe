const router = require('express').Router();
const {
    signup,
    signin
} = require('./auth.controller');
const {
    response
} = require('../../util');

router.get('/', (req, res, next) => {
    res.send('api auth');
});

router.post('/signup', signup, response);
router.post('/signin', signin, response);

module.exports = router;