const router = require("express").Router();
var jwt = require("jsonwebtoken");
var middleware = require('../middlewar/middlewar')
const multer=require('multer');
const path = require("path")

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function(req, file, cb){
    cb(null,"IMG-" + Date.now() + path.extname(file.originalname));
    
   
  }
});

const upload = multer({
  storage: storage
});


class update {

  constructor(updatecontroller) {
    this.controller = updatecontroller
    this.init();
  }

  init() {
    router.post("/addproduct", middleware,upload.single("productImage"), (req, res) =>{
      console.log(req.file)
      var { productName,description,price,category} =req.body
      let str=req.file.path
      let newstr=str.slice(6)
     
      var url ="http://localhost:9000/"+newstr
      var id =req.user

      this.controller.addProduct(
        url,
        id,
        productName,
        description,
        price,
        category
      ).then(result => {
        res.send(result);
      });
      
  })

  router.post("/addtocart",middleware,(req, res) => {
    const {productId} = req.body;
    const userId = req.user      
    this.controller.addtocart(userId,productId).then(result=>{
      res.send(result)
    })
  })
  

  router.post("/removefromcart",middleware,(req, res) => {
    const {id} = req.body;
    const userId = req.user      

    this.controller.removeFromCart(userId,id).then(result=>{
      res.send(result)
    })
  })

  router.post("/order",middleware,(req, res) => {
    const { productId,storeId} = req.body;
    const userId = req.user      
    console.log(userId,productId,storeId)

    this.controller.order(userId,productId,storeId).then(result=>{
      res.send(result)
    })
  })


  router.post("/prepared",middleware,(req, res) => {
    const {id} = req.body;

    this.controller.isPrepared(id).then(result=>{
      res.send(result)
    })
  })

  router.post("/delivered",middleware,(req, res) => {
    const {id} = req.body;

    this.controller.isDelivered(id).then(result=>{
      res.send(result)
    })
  })



  }

  getRouter() {
    return router;
  }
  }
  
  module.exports = controller => {
    return new update(controller);
  };
  