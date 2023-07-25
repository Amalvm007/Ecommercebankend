// import mongoose
const mongoose = require('mongoose')

// make connection string 
mongoose.connect('mongodb://localhost:27017/eshopping',()=>{
    console.log('Mongodb connected');

})

// to store allProducts in db
const Product = mongoose.model('Product',
{
    
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image:String,
    rating: {
        rate: Number,
        count: Number
    }
  }
)
// to store wishlist 
const Wishlist = mongoose.model('Wishlist',
{
    
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image:String,
    rating: {
        rate: Number,
        count: Number
    }
  }
)

module.exports ={
    Product,
    Wishlist
}