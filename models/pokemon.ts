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
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

export default pokemon;