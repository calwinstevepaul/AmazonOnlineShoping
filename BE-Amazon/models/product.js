'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    userId: DataTypes.INTEGER,
    productImage: DataTypes.STRING,
    productName: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    category: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN
  }, {});
  product.associate = function(models) {
    // associations can be defined here
    product.belongsTo(models.user);
    
  };
  return product;
};