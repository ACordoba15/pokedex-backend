'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('pokemon', {
      id : {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: true,
      },
      type1: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true,
      },
      type2: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true,
        
      },
      imageDefault: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: true,
    
      },
      imageDefaultShiny: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: true,
    
      },
      imageFemale: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: true,
    
      },
      imageFemaleShiny: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: true,
    
      },
      imageArtwork: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: true,
    
      },
      imageArtworkShiny: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: true,
    
      },
      male: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },
      female: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('pokemon');
  }
};
