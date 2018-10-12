const {
    body,
    check,
    validationResult,
} = require('express-validator/check');
const {
    query,
    bcrypt,
} = require('../../util');

/*
 * 회원가입 
 */
exports.signup = {
    validate: [
        // 이메일 검사
        check('email').isEmail(),
        // 비밀번호 검사
        body('password').custom(value => {
            if (value.length < 10) {
                throw new Error('Invalid value');
            }

            return value;
        }),
    ],
    valdiateResult: (req, _, next) => {
        const errors = validationResult(req).array();
        if (errors.length < 1) {
            return next();
        }

        next({
            message: `${errors[0]['msg']} (${errors[0]['param']})`,
        });
    },
    execute: async (req, res, next) => {
        try {
            const email = req.body.email,
                password = req.body.password;

            const sql = 'INSERT INTO USERS(EMAIL, PASSWORD) VALUES(?, ?);',
                placeholder = [email, await bcrypt.generate(password)];

            await query(sql, placeholder);
            res.result = {
                status: 200,
                message: 'Signed up successfully'
            };
            next();
        } catch (err) {
            next({
                message: err.message ? err.message : 'no message'
            });
        }
    },
};

/*
 * 로그인
 */
exports.signin = {
    validate: [
        // 이메일 검사
        check('email').isEmail(),
        // 비밀번호 검사
        body('password').custom(value => {
            if (value.length < 10) {
                throw new Error('Invalid value');
            }
            return value;
        }),
    ],
    valdiateResult: (req, _, next) => {
        const errors = validationResult(req).array();
        if (errors.length < 1) {
            return next();
        }

        next({
            message: `${errors[0]['msg']} (${errors[0]['param']})`,
        });
    },
    execute: async (req, res, next) => {
        try {
            const email = req.body.email,
                password = req.body.password;

            const sql = 'SELECT PASSWORD FROM USERS WHERE EMAIL = ?;',
                placeholder = [email];

            const result = await query(sql, placeholder),
                compareResult = await bcrypt.compare(password, result[0]['PASSWORD']);

            if (!compareResult) {
                next({
                    status: 401,
                    message: 'Check your email or password'
                });
            }

            res.result = {
                status: 200,
                message: 'Signed in successfully',
            };
            next();
        } catch (err) {
            next({
                message: err.message ? err.message : 'no message',
            });
        }
    },
};