'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.addColumn('Products', 'price', {
     type: Sequelize.DECIMAL,
   });
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.removeColumn('Products', 'price');
  }
};
