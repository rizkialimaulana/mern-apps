import Product from "../models/Product.js"

export const createProduct = async(req,res) => {
    const newProduct = Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct)
}

export const getProducts = async(req,res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json(allProducts)
    } catch (err) {
        res.status(500).json(err)
    }    
}

export const getProduct = async(req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json(err)
    }    
}

export const updateProduct = async(req,res)=> {
    try {
        // TODO
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteProduct = async(req,res)=> {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).send('Item has been deleted');
    } catch (err) {
        res.status(500).json(err);
    }
}