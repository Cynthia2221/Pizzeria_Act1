const { where } = require("sequelize");
const db = require("../models");
const Pizza = db.pizzas;


exports.create = (req, res) => {
    const pizza = {
        address: req.body.address,
        name: req.body.name,
        telephone: req.body.telephone
    }

    console.log(req.body);

    Pizza.create(pizza).then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message || "Some error occurred while creating the notebook." });
    })
};

exports.findAll = (req, res) => {
    Pizza.findAll().then((data) => {
        res.send(data);
    }).catch(err => {
        console.log("el error está aqui");
    })
}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updatePizza = {
        address: req.body.address,
        name: req.body.name,
        telephone: req.body.telephone
    };

    Pizza.update(updatePizza, {
        where: { id: id }
    }).then(() => {
        console.log("The pizza was updated");
        res.send({ message: "Pizza updated" })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Pizza.destroy({ where: { id: id } }).then(() => {
        console.log("Se borró mi pana");
        res.send("Se borró");
    })
}