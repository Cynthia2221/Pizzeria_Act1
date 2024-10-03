module.exports = app => {
    const pizzas = require("../controllers/myPizzeria.controller")

    var router = require("express").Router();

    router.post("/", pizzas.create);

    router.get("/", pizzas.findAll);

    router.put("/:id", pizzas.update);

    router.delete("/:id", pizzas.delete);

    app.use("/api/pizzas", router);
}