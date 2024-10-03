const { where } = require("sequelize");
const db = require("../models");
const Pizza = db.pizzas;


exports.create = (req, res) => {
    const pizza = {
        address: req.body.address,
        name: req.body.name,
        telephone: req.body.telephone
    }

    if (!pizza.address || !pizza.name || !pizza.telephone) {
        return res.status(400).send({
            message: "Todos los campos son obligatorios."
        });
    }

    Pizza.create(pizza).then((data) => {
        res.send(data);
    })
}

exports.findAll = (req, res) => {
    Pizza.findAll().then((data) => {
        res.send(data);
    })
}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {
    const id = req.params.id;

    Pizza.destroy({ where: { id: id } }).then(() => {
        console.log("Se borró mi pana");
        res.send("Se borró");
    })
}