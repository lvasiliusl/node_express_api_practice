const Artists = require('../model/artists');

exports.all = (req, res) => {
    Artists.all((error, results, fields) => {
        if (error) {
            console.log(error);
            return res.sendStatus(500);
        }
        res.send(results);
    })
}

exports.findById = (req, res) => {
    Artists.findById(req.params.id, (error, results, fields) => {
        if (error) {
            console.log(error);
            return res.sendStatus(500);
        }
        res.send(results);
    });
};

exports.create = (req, res) => {
    let artist = {
        name: req.body.name
    };

    Artists.create(artist, (error, results, fields) => {
        if (error) {
            console.log(error);
            return res.sendStatus(500);
        }
        res.send({ id: results.insertId });
    });
};

exports.update = (req, res) => {
    Artists.update(req.params.id, req.body.name, (error, results, fields) => {
        if (error) {
            console.log(error);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};

exports.delete = (req, res) => {
    Artists.delete(req.params.id, (error, results, fields) => {
        if (error) {
            console.log(error);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};