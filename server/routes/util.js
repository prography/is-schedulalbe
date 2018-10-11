/*
 * MySQL
 */
const mysql = require('mysql');
const mysql_config = require('../config/config').mysql_config;
const pool = mysql.createPool(mysql_config);
exports.query = (sql, placeholder, callback) => {
    pool.getConnection((err, conn) => {
        if (err) {
            callback({
                message: err.sqlMessage
            }, null, null);
            return;
        }

        if (placeholder !== null) {
            conn.query(sql, placeholder, (err, results, fields) => {
                conn.release();

                if (err) {
                    callback({
                        message: err.sqlMessage
                    }, null, null);
                    return;
                }

                callback(null, results, fields);
            });
        }
    });
};

exports.response = (req, res) => {
    res.json(req._result);
};

