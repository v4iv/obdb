'use strict';

/**
 * Read More @ http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html
 * @type {{up: (function(*, *): Promise<<void>[]>), down: (function(*, *): Promise<<void>[]>)}}
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('books', 'release_year', {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null
        }, { transaction: t }),
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('books', 'release_year', { transaction: t }),
      ])
    })
  }
};
