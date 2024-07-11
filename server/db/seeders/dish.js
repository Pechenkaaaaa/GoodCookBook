'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Dishes',
      [
        {
          title: 'Щи',
          ingredients: 'Мясо, Капуста белокочанная, Картофель, Морковь, Лук репчатый, Томатная паста, Лавровый лист, Перец чёрный молотый, Соль, Масло растительное',
          ingredientsCount: 10,
          cookingTime: 90,
          img: 'IMG#1',
          
        },
        {
          title: 'Борщ',
          ingredients: 'Говядина, Картофель, Капуста белокочанная, Свекла, Морковь, Лук репчатый, Томатная паста, Зелень петрушки, Соль, Масло растительное, Вода, Сметана ',
          ingredientsCount: 12,
          cookingTime: 110,
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
