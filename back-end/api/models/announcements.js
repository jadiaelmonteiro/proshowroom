'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Announcements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Announcements.init({
    title: DataTypes.STRING,
    categorie: DataTypes.STRING,
    filePath: DataTypes.STRING,
    value: DataTypes.STRING,
    state: DataTypes.STRING,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'announcements',
  });
  return Announcements;
};