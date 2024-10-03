module.exports = (sequelize, Sequelize) => {
    const Pizzeria = sequelize.define("pizza", {
        address: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING

        },
        telephone: {
            type: Sequelize.STRING
        }

    });

    return Pizzeria;

};
