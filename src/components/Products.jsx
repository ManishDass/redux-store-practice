import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import  axios  from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { add, remove } from '../store/cartSlice'

const Products = () => {
    const [product, setProduct] = useState([])

    const cartSelector = useSelector(state => state.cart)
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(cartSelector)
    },[])
    
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((responce)=>{
            setProduct(responce.data)
            // console.log(responce.data)
        })
    },[])

  return (
    <div className='productsWrapper' style={{marginTop: '30px'}}>
        {
            product.map((product)=>(  
                <div className='card' key={product.id}>
                    <img className='product-image' src={product.image} alt={product.title}/>
                    <h4>{product.title}</h4>
                    <p>Rating: {product.rating.rate} ({product.rating.count})</p>
                    <h5>{product.price}$</h5>
                    <button className='btn' onClick={()=>dispatch(add(product))}  >Add to cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products