const {Router} = require ('express');
const {createProduct,getProduct} = require('../controllers/product')

const productRouter = Router();


productRouter.post("/",createProduct);
productRouter.get("/:category",getProduct);

module.exports = productRouter;