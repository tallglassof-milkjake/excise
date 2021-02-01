const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Excise.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        console.log(req.params._id);
        // console.log(res);
        db.Excise.findOne(req.params._id)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            });
    },
    create: function(req, res) {
        console.log(req.body);
        db.Excise.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            });
    },
    update: function(req, res) {
        db.Excise.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Excise.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};