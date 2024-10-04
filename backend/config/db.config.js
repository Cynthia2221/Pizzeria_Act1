module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "MisiNalaLuna2003",
    DB: "db-pizzas",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}