// import express
const express = require('express')

// import cors
const cors = require('cors')

// import dataservice
const dataservice = require('./services/dataservices')
// create server 
const server = express()

// use cors
server.use(cors({
    origin:'http://localhost:4200'
}))

// parse json
server.use(express.json())

// create a port for server
server.listen(3000,()=>{
    console.log('serer is running at 3000');
})


// all-products
server.get('/all-products',(req,res)=>{
    dataservice.allProducts().then((result)=>{
        res.status(result.statusCode).json(result)
    })

})

//  view-product
server.get('/view-products/:productId',(req,res)=>{
    dataservice.viewProduct(req.params.productId).then((result)=>{
        res.status(result.statusCode).json(result)
    })

})

// addToWishlist
server.post('/add-to-wishlist',(req,res)=>{
    dataservice.addToWishlist(req.body).then((result)=>{
        res.status(result.statusCode).json(result)
    })

})

// getWishlist
server.get('/get-wishlist',(req,res)=>{
    dataservice.getWishlist().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


// remove-item-Wishlist
server.delete('/remove-item-wishlist/:productId',(req,res)=>{
    dataservice.deleteItemWishlist(req.params.productId).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})