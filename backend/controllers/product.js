const productModel = require('../models/product')

const createProduct = async(req,res)=>{
    const product = req.body;
    try{
           const product_doc = new productModel({...product});
           product_doc.save((err)=>{
            if(err){
                res.status(500).json({message:"Something went wrong!",err})
            }
            else{
                res.status(201).json(product_doc);
            }
           })   
    }
    catch(error){
        res.status(500).json({message:"Something went wrong!",error})
    }
}

const getProduct = async(req,res)=>{
    const { category } = req.params;
    const {sortBy} = req.query;
    console.log(sortBy);
    try{

        if(category==="all-products"){
            if(sortBy==="price-asc"){
                const products = await productModel.find().sort({price: 1});
                res.status(200).json(products);
            }
            else if(sortBy==="price-dsc"){
                const products = await productModel.find().sort({price: -1});
                res.status(200).json(products);
            }
            else{
                const products = await productModel.find();
                res.status(200).json(products);
            }
            
        }
        else if(category==="skincare" || category==="bodycare" || category==="haircare" || category==="perfume"){
            if(sortBy==="price-asc"){
                const products = await productModel.find({category: category}).sort({price: 1});
                res.status(200).json(products);
            }
            else if(sortBy==="price-dsc"){
                const products = await productModel.find({category: category}).sort({price: -1});
                res.status(200).json(products);
            }
            else{
                const products = await productModel.find({category: category});
                if(products.length===0){
                    res.status(404).json({message:"Products not found"})
                }
                else{
                    res.status(200).json(products);
                }
            }
       
        }
        else{
            if(sortBy==="price-asc"){
                const products = await productModel.find({subcategory: category}).sort({price: 1});
                res.status(200).json(products);
            }
            else if(sortBy==="price-dsc"){
                const products = await productModel.find({subcategory: category}).sort({price: -1});
                res.status(200).json(products);
            }
            else{
                const products = await productModel.find({ subCategory: category});
                if(products.length===0){
                    res.status(404).json({message:"Products not found"})
                }
                else{
                    res.status(200).json(products);
                }
            }
           
            
        }
        
        

    }
    catch(error){
        res.status(500).json({message:"Something went wrong!",error})   
    }

}

module.exports = {createProduct,getProduct};