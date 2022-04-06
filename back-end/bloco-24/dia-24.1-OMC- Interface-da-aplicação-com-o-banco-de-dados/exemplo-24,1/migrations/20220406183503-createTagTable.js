'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'ProductTags',
      {
        productId:{
          type: Sequelize.INTEGER,
          references: {
            model: 'Products',
            key: 'id'
          },
          primartKey: true
        },
        tagId:{
          type: Sequelize.INTEGER,
          references: {
            model: 'Tags',
            key: 'id'
          },
          primartKey: true
        },
      },
    );
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.dropTable('ProductTags');
  }
};
