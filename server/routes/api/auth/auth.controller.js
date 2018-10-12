const {
    body,
    check,
    validationResult,
} = require('express-validator/check');
const {
    query,
    bcrypt,
} = require('../../../utils');
const validators = require('../../../utils/validators');

/*
 * 회원가입 
 */
exports.signup = {
    validate: [
        validators.email(),
        validators.password(),
    ],
    run: async (req, res, next) => {
        try {
            const {
                email,
                password
            } = req.body;

            const sql = 'INSERT INTO USERS(EMAIL, PASSWORD) VALUES(?, ?);',
                placeholder = [email, await bcrypt.generate(password)];

            await query(sql, placeholder);
            res.result = {
                status: 200,
                message: 'Signed up successfully',
            };
            next();
        } catch (err) {
            next({
                status: err.status,
                message: err.message || 'no message',
            });
        }
    },
};

/*
 * 로그인
 */
exports.signin = {
    validate: [
        validators.email(),
        validators.password(),
    ],
    run: async (req, res, next) => {
        try {
            const {
                email,
                password
            } = req.body;

            const sql = 'SELECT PASSWORD FROM USERS WHERE EMAIL = ?;',
                placeholder = [email];

            const result = await query(sql, placeholder);
            if (result.length < 1) {
                throw {
                    status: 401,
                    message: 'Check your email or password',
                }
            }

            const compareResult = await bcrypt.compare(password, result[0]['PASSWORD']);
            if (!compareResult) {
                throw {
                    status: 401,
                    message: 'Check your email or password',
                }
            }

            res.result = {
                status: 200,
                message: 'Signed in successfully',
            };
            next();
        } catch (err) {
            next({
                status: err.status,
                message: err.message || 'no message',
            });
        }
    },
};