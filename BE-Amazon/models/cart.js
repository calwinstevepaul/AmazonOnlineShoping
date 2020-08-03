'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  cart.associate = function(models) {
    // associations can be defined here
    cart.belongsTo(models.product);
    
  };
  return cart;
};