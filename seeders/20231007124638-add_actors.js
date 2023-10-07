// Seeding dengan sequelize

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('actor', [
      {
        first_name: 'Rei',
        last_name: 'Kaminari',
        last_update: new Date(),
      },
      {
        first_name: 'Shoto',
        last_name: 'Todoroki',
        last_update: new Date(),
      },
      {
        first_name: 'Katsuki',
        last_name: 'Bakugo',
        last_update: new Date(),
      },
      {
        first_name: 'Kendall',
        last_name: 'Jenner',
        last_update: new Date(),
      },
      {
        first_name: 'Selena',
        last_name: 'Gomez',
        last_update: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('actor', null, {});
  },
};
