const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Recipe = sequelize.define('Recipe', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING, // カンマ区切りのタグ
    allowNull: true,
  },
});

module.exports = Recipe;
