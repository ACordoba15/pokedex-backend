import { DataTypes } from "sequelize";
import db from '../db/connection';

const pokemon = db.define('pokemon', {
  id : {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.NUMBER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type2: {
    type: DataTypes.STRING,
    allowNull: true,
    
  },
  imageDefault: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  imageDefaultShiny: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  imageFemale: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  imageFemaleShiny: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  imageArtwork: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  imageArtworkShiny: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  male: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  female: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

pokemon.sync();

const bulbasaur = pokemon.create({
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
  female: 0
});

export default pokemon;