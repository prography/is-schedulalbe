const util = require('../../util');
const {
    query,
    generateHash
} = util;

/*
 * 회원가입 
 */
exports.signup = async (req, res, next) => {
    try {
        const email = req.body.email,
            password = req.body.password;
        let a = await generateHash(password);
        const sql = 'INSERT INTO USERS(EMAIL, PASSWORD) VALUES(?, ?);',
            placeholder = [email, a];


        query(sql, placeholder, (err, results, fields) => {
            if (err) {
                next(err);
            }

            res.result = {
                result: true,
                status: 200
            };
            next();
        });
    } catch (err) {
        console.error(err);
    }
};