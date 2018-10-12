const {
    query,
    bcrypt
} = require('../../util');

/*
 * 회원가입 
 */
exports.signup = async (req, res, next) => {
    try {
        const email = req.body.email,
            password = req.body.password;

        const sql = 'INSERT INTO USERS(EMAIL, PASSWORD) VALUES(?, ?);',
            placeholder = [email, await bcrypt.generate(password)];

        await query(sql, placeholder);
        res.result = {
            status: 200,
            message: "Signed up successfully"
        };
        next();
    } catch (err) {
        next({
            message: err.message ? err.message : 'no message'
        });
    }
};

/*
 * 로그인
 */
exports.signin = async (req, res, next) => {
    try {
        const email = req.body.email,
            password = req.body.password;

        const sql = 'SELECT PASSWORD FROM USERS WHERE EMAIL = ?;',
            placeholder = [email];

        const results = await query(sql, placeholder),
            compareResult = await bcrypt.compare(password, results[0]['PASSWORD']);

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
};