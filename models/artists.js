const db = require('../db');

exports.all = (cb) => {
    db.get().query('SELECT * FROM test_node_js.artists', (error, results, fields) => {
        cb(error, results, fields);
    });
};

exports.findById = (id, cb) => {
    db.get().query('SELECT * FROM test_node_js.artists WHERE id=?', [Number(id)], (error, results, fields) => {
        cb(error, results, fields);
    });
};

exports.create = (artist, cb) => {
    db.get().query('INSERT INTO test_node_js.artists (name) VALUES(?)', [artist.name], (error, results, fields) => {
        cb(error, results, fields);
    });
};

exports.update = (id, name, cb) => {
    db.get().query('UPDATE test_node_js.artists SET name=? WHERE id=?', [name, id], (error, results, fields) => {
        cb(error, results, fields);
    });
};

exports.delete = (id, cb) => {
    db.get().query('DELETE FROM test_node_js.artists WHERE id=?', [id], (error, results, fields) => {
        cb(error, results, fields);
    });
};