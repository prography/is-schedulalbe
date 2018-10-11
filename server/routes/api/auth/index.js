const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('api auth');
});

module.exports = router;