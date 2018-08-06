const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '654321',
    database: 'test_node_js'
});

exports.get = () => {
    return mysqlConnection;
}

exports.connect = () => {
    return mysqlConnection.connect();
};