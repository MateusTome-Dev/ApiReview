const { Router }=require("express");
const UserController = require("../controller/UserController");
const ProductController = require("../controller/ProductControl");

const router= Router();
router.post('/user',(req,res)=>{
    UserController.create(req,res)
})
router.get('/user',(req,res)=>{
    UserController.getAll(req,res)
})
router.delete('/user/:id',(req,res)=>{
    UserController.delete(req,res)
})
router.put('/user/:id',(req,res)=>{
    UserController.update(req,res)
})
router.get('/user/:id',(req,res)=>{
    UserController.getOne(req,res)
})
router.post('/product',(req,res)=>{
    ProductController.create(req,res)
})
router.get('/product',(req,res)=>{
    ProductController.getAll(req,res)
})
router.delete('/product/:id',(req,res)=>{
    ProductController.delete(req,res)
})
router.put('/product/:id',(req,res)=>{
    ProductController.update(req,res)
})
router.get('/product/:id',(req,res)=>{
    ProductController.getOne(req,res)
})

module.exports=router;