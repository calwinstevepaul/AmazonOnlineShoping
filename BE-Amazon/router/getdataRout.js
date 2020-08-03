const router = require("express").Router();
const bcrypt =require('bcrypt')
var jwt = require("jsonwebtoken");
var middleware = require('../middlewar/middlewar')



class getData {

  constructor(getdatacontroller) {

    this.controller = getdatacontroller
    this.init();
  }

  init() {
    router.post("/product",middleware,(req, res) => {
      this.controller.getProduct().then(result=>{
        res.send(result)
      })
    })  

    router.post("/currentUser",middleware,(req, res) => {
      const id = req.user
      this.controller.getCurrentUser(id).then(result=>{
        res.send(result)
      })
    })  
   
    router.post("/cart",middleware,(req, res) => {
      const id = req.user
      this.controller.getCart(id).then(result=>{
        res.send(result)
      })
    })

    router.post("/orders",middleware,(req, res) => {
      const id = req.user
      this.controller.getOrders(id).then(result=>{
        res.send(result)
      })
    })

    router.post("/delivery",middleware,(req, res) => {
      const id = req.user
      this.controller.getDelivery(id).then(result=>{
        res.send(result)
      })
    })

    router.post("/orderstatus",middleware,(req, res) => {
      const id = req.user
      this.controller.getOrderStatus(id).then(result=>{
        res.send(result)
      })
    })



  }

  getRouter() {
    return router;
  }
}
  
module.exports = controller => {
  return new getData(controller);
};
  