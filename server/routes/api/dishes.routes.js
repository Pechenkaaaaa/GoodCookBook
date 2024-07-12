const dishRouter = require("express").Router();
const { Dish } = require("../../db/models");
// const verifyAccessToken = require("../../middleware/verifyAccessToken");

dishRouter.get("/", async (req, res) => {
  try {
    const dishes = await Dish.findAll({
      orderBy: [["id", "ASC"]],
    });
    res.status(200).json({ message: "success", dishes });
  } catch (error) {
    res.status(500).json(error);
  }
});

dishRouter.get('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const dishes = await Dish.findOne({ where: { id: id } });
      res.status(200).json({ message: 'success', dishes });
  } catch ({ message }) {
      res.status(500).json({ error: message })
  }
});

module.exports = dishRouter;
