var model=require('../models')


class updateController{
  
  async addProduct( url,id,productName,description,price,category){
    return model.product.create({
      userId:id,
      productImage:url,
      productName:productName,
      description:description,
      price:price,
      category:category,
      isAvailable:true

    })
  }

  async addtocart(userId,productId){
    return model.cart.create({
      userId:userId,
      productId:productId
    })
  }

  async removeFromCart(userId,id){
    await model.cart.destroy({
      where:{
        id:id,
        userId:userId
      }
    })
    let x = {status:true}
    return x
  }

  async order(userId, productId,storeId){
    return model.order.create({
      userId:userId,
      productId:productId,
      storeId:storeId,
      isDespatched:false,
      isDelivered:false
    })
  }


  async isPrepared(id){
    return model.order.update({
      isDespatched:true
    },{
      where:{
        id:id
      }
    })
  }

  async isDelivered(id){
    return model.order.update({
      isDelivered:true
    },{
      where:{
        id:id
      }
    })
  }


 
}


module.exports = () => {
    return new updateController();
  };
   