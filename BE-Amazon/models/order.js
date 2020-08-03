'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    storeId: DataTypes.INTEGER,
    isDespatched: DataTypes.BOOLEAN,
    isDelivered: DataTypes.BOOLEAN
  }, {});
  order.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.user);
    order.belongsTo(models.product)


  };
  return order;
};