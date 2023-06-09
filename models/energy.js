'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Energy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Energy.belongsTo(models.Site,{foreignKey:'siteId'})
    }
  }
  Energy.init({
    energyType: DataTypes.STRING,
    equipment: DataTypes.STRING,
    location: DataTypes.STRING,
    capacity: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Energy',
    tableName:'Energies',
    underscored: true,
  });
  return Energy;
};