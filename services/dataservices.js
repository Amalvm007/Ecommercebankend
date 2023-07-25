// import db 
const db = require('./db')

// all-products
const allProducts =()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    products:result
              }
            }else{
                return{
                    statusCode:404,
                    message:"Not data is found"
                }
            }
        }
    )
}

// viewProduct
 const viewProduct=(id)=>{
    return db.Product.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    product:result
              }

            }else{
                return{
                    statusCode:404,
                    message:"Product is found"
                }
            }
        }
    )
       
    
 }

//  add to wishlist

const addToWishlist =(product)=>{
    return db.Wishlist.findOne({
        id:product.id
    }).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Item is already present  inside your wishlist"
            }

        }else{
            let newProdcut = new db.Wishlist({
              id: product.id,
              title: product.title,
               price: product.price,
             description: product.description,
                image:product.image,
               rating: {
               rate: product.rating.rate,
                count: product.rating.count
               }
            })
            newProdcut.save()
            return{
                statusCode:200,
                message:'Product is added to wishlist'
          }
        }
    })

}

// getWishlist
const getWishlist=()=>{
    return db.Wishlist.find()
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                Wishlist:result
            }

        }else{
            return{
                statusCode:404,
                message:'wishlist is empty'
            }
        }
    })

}
// deleteItemWishlist
const deleteItemWishlist = (id)=>{
 return db.Wishlist.deleteOne({id})
 .then((result)=>{
    if(result){
        return db.Wishlist.find() 
        .then((result)=>{
            if(result){
                return{
                    statusCode:200,
                    Wishlist:result
                }
    
            }else{
                return{
                    statusCode:404,
                    message:'wishlist is empty'
                }
            }
        })

        
    }else{
        return{
            statusCode:404,
            message:'wishlist is empty'
        }
    }
 })
}

module.exports ={
    allProducts,
    viewProduct,
    addToWishlist,
    getWishlist,
    deleteItemWishlist
}