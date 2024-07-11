'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Dishes',
      [
        {
          titel: '1-Maserati quattroporte',
          ingredients: 'Maserati quattroporte',
          ingredientsCount: 8,
          cookingTime: 30,
          img: 'IMG#1',
          
        },
        {
          titel: '2-Maserati quattroporte',
          ingredients: 'Maserati quattroporte',
          ingredientsCount: 8,
          cookingTime: 30,
          img: 'IMG#2',
          
        },
        {
          titel: '3-Maserati quattroporte',
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
