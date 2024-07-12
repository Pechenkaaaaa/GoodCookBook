const favoriteRouter = require("express").Router();
const { Favorite } = require("../../db/models");
// const verifyAccessToken = require("../../middleware/verifyAccessToken");

favoriteRouter.get("/", async (req, res) => {
  try {
    const favoritesDishes = await Favorite.findAll();
    res.status(200).json({ message: "success", favoritesDishes });
  } catch (error) {
    res.status(500).json(error);
  }
});

favoriteRouter.post("/", async (req, res) => {
  //console.log("from req _______", req.body);
  const { userId, dishId } = req.body;
  try {
    const favorite = await Favorite.create({ userId, dishId });
    res.status(201).json({ message: "success", favorite });
  } catch (error) {
    res.status(500).json(error);
  }
});

favoriteRouter.delete("/users/:userId/dishes/:dishId", async (req, res) => {
  const { userId, dishId } = req.params;
  console.log(req.body);
  try {
    const favorite = await Favorite.destroy({ where: { userId, dishId } });
    res.status(201).json({ message: "success", favorite });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = favoriteRouter;
