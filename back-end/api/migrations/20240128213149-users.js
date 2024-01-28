'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'filePath', Sequelize.STRING);
    await queryInterface.addColumn('users', 'address', Sequelize.STRING);
    await queryInterface.addColumn('users', 'country', Sequelize.STRING);
    await queryInterface.addColumn('users', 'city', Sequelize.STRING);
    await queryInterface.addColumn('users', 'state', Sequelize.STRING);
    await queryInterface.addColumn('users', 'code', Sequelize.STRING);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'filePath');
    await queryInterface.removeColumn('users', 'address');
    await queryInterface.removeColumn('users', 'country');
    await queryInterface.removeColumn('users', 'city');
    await queryInterface.removeColumn('users', 'state');
    await queryInterface.removeColumn('users', 'code');
  }
};
