/*
 * MySQL
 */
const mysql = require('mysql');
const mysql_config = require('../config/config').mysql_config;
const pool = mysql.createPool(mysql_config);
exports.query = (sql, placeholder) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                reject({
                    message: err.sqlMessage
                });
            }

            if (placeholder !== null) {
                conn.query(sql, placeholder, (err, results) => {
                    conn.release();
                    if (err) {
                        reject({
                            message: err.sqlMessage
                        });
                    }
                    resolve(results);
                });
            }
        });
    });
};

/*
 * API response
 */
exports.response = (_, res) => {
    try {
        res.status(res.result.status)
            .json({
                message: res.result.message,
            });
    } catch (err) {
        throw {
            status: 500,
            message: err.message,
        };
    }
};

/*
 * bcrypt 
 */
const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.bcrypt = {
    generate: password => {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) reject(err);
                resolve(hash);
            });
        });
    },
    compare: (password, hash) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, (err, res) => {
                if (err) reject(err);
                resolve(res);
            });
        });
    }
};