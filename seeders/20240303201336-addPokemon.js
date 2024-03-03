'use strict';

/** @type {import('sequelize-cli').Migration} */

const axios = require('axios');
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('pokemon', [{
      name: 'bulbasaur', 
      type1: 'grass', 
      type2: 'poison', 
      imageDefault: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png', 
      imageDefaultShiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png', 
      imageFemale: null, 
      imageFemaleShiny: null, 
      imageArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', 
      imageArtworkShiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png', 
      male: 0, 
      female: 0,
      createdAt: new Date().toJSON(),
      updatedAt: new Date().toJSON()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Pokemon', null, {});
  }
};
