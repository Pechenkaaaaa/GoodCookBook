"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Dishes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      ingredients: {
        type: Sequelize.TEXT,
      },

      ingredientsCount: {
        type: Sequelize.INTEGER,
      },
      cookingTime: {
        type: Sequelize.INTEGER,
      },
      img: {
        type: Sequelize.TEXT,
      },

      // userId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "Users",
      //     key: "id"
      //   },
      //   onDelete: "CASCADE",
      //   onUpdate: "CASCADE"
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Dishes");
  },
};
