"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Favorite, {
        foreignKey: "dishId",
      });
    }
   
  }
  Dish.init(
    {
      titel: DataTypes.STRING,
      ingredients: DataTypes.STRING,
      ingredientsCount: DataTypes.INTEGER,
      cookingTime: DataTypes.INTEGER,
      img: DataTypes.TEXT,
      
    },
    {
      sequelize,
      modelName: "Dish",
    }
  );
  return Dish;
};