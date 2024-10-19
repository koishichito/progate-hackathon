const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/recipes.db',
});

module.exports = sequelize;
