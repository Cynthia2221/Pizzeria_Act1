module.exports = (sequelize, Sequelize) => {
    const Pizzeria = sequelize.define("pizza", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true // Asegúrate de que se auto-incremente
        },
        address: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
        telephone: {
            type: Sequelize.STRING,
        }
    });

    return Pizzeria;
};
