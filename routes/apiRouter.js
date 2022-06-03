const apiRouter = require("express").Router();
const Container = require("../ddbb/claseContainer");
const contenedor = new Container({ fileName: "products" });

apiRouter.get("/", (req, res) => {
  contenedor.getAll().then((prod) => res.json(prod));
});

apiRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  contenedor.getById(id).then((prod) => {
    res.send(prod);
  });
});

apiRouter.post("/", (req, res) => {
  const newProduct = req.body;
  contenedor.save(newProduct).then((prod) => res.send({ message: prod }));
});

apiRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  contenedor.modifyById(id, product).then((prod) => res.send(prod));
});

apiRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  contenedor.deleteById(id).then((prod) => {
    res.send(prod);
  });
});
module.exports = apiRouter;
