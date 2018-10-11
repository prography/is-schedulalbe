const util = require('../../util');

/*
 * 회원가입 
 */
exports.signup = (req, res, next) => {
    const email = req.body.email,
        password = req.body.password;

    const sql = 'INSERT INTO USERS(EMAIL, PASSWORD) VALUES(?, ?);',
        placeholder = [email, password];

    util.query(sql, placeholder, (err, results, fields) => {
        if (err) {
            next(err);
        }

        req._result = {
            result: true,
            status: 200
        };
        next();
    });
};