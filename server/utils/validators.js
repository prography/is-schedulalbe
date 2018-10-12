const {
    body,
    check,
    validationResult,
} = require('express-validator/check');

exports.email = () => {
    return check('email').isEmail();
};

exports.password = () => {
    return body('password')
        .exists()
        .isLength({
            min: 10
        });
    // .custom(value => {
    //     if (value.length < 10) {
    //         throw new Error('Invalid value');
    //     }

    //     return value;
    // });
};

exports.validationResult = (req, _, next) => {
    try {
        const errors = validationResult(req).array();

        // 에러가 없는 경우 
        if (errors.length < 1) {
            return next();
        }

        throw {
            status: 400,
            message: `${errors[0]['msg']} (${errors[0]['param']})`,
        };
    } catch (err) {
        next({
            status: err.status,
            message: err.message || 'no message',
        });
    }
};