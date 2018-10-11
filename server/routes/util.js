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

exports.response = (_, res) => {
    res.json(res.result);
};

/*
 * bcript
 */
const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.bcrypt = {
    generate: async password => {
            return new Promise((resolve, reject) => {
                bcrypt.hash(password, saltRounds, (err, hash) => {
                    if (err) reject(err);
                    resolve(hash);
                });
            });
        },
        compare: async (password, hash) => {
            return new Promise((resolve, reject) => {
                bcrypt.compare(password, hash, (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                });
            });
        }
};