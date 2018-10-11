const DATABASE = 'is_schedulalbe';
const CONNECTION_LIMIT = 10;
exports.mysql_config = {
    connectionLimit: CONNECTION_LIMIT,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: DATABASE,
};