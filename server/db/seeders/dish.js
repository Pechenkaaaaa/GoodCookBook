'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Dishes',
      [
        {
          title: '1-Maserati quattroporte',
          ingredients: 'Maserati quattroporte',
          ingredientsCount: 8,
          cookingTime: 30,
          img: 'IMG#1',
          
        },
        {
          title: '2-Maserati quattroporte',
          ingredients: 'Maserati quattroporte',
          ingredientsCount: 8,
          cookingTime: 30,
          img: 'IMG#2',
          
        },
        {
          title: '3-Maserati quattroporte',
          ingredients: 'Maserati quattroporte',
          ingredientsCount: 8,
          cookingTime: 30,
          img: 'IMG#3',
          
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dishes', null, {});
  },
};
