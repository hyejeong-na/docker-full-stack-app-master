const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    port: process.env.RDS_PORT
});
exports.pool = pool;
