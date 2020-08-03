var model=require('../models')
let Op=require('sequelize').Op


class getdataController{
  async getProduct(){
    return model.product.findAll({
      where: {
        isAvailable:true
      }
      

    })
  }

  async getCurrentUser(id){
    return model.user.findAll({
      where:{
        id:id
      }
    })
  }

  async getCart(id){
    return model.cart.findAll({
      where:{
        userId:id
      },
      include:[{
        model:model.product,
        include:[{
          model:model.user
        }]
      }]
    })
  }

  async getOrders(id){
    return model.order.findAll({
      where:{
        isDespatched:false,
        isDelivered:false

      },include:[{
        model:model.user
      },{
        model:model.product
      }]
    })
  }

  async getDelivery(id){
    return model.order.findAll({
      where:{
        isDespatched:true,
        isDelivered:false
      },include:[{
        model:model.user
      },{
        model:model.product
      }]
    })
  }


  async getOrderStatus(id){
    return model.user.findAll({
      where:{
        id:id
      },include:[
        {
          model:model.order,
          include:[{
            model:model.product,
            include:[{
              model:model.user
            }]
          },
         ]          
        }

      ]
    })
  }
  
  
}


module.exports = () => {
    return new getdataController();
  };
  