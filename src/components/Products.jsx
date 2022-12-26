import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { add, remove } from '../store/cartSlice'
import { fetchProducts } from '../store/productSlice'

    const Products = () => {

    const selector = useSelector(state => state.product)
    const dispatch = useDispatch()

    // console.log("Dekho: ",selector)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

  return (
    <React.Fragment>
        <h2 className='dark'>{ selector.loading ? 'Loading' : 'Featured Product\'s'}</h2>
        <h2 className='dark'>{ selector.error && selector.error }</h2>
    <div className='productsWrapper' style={{marginTop: '30px'}}>
    { 
        selector.data.map((product)=>(  
            <div className='card' key={product.id}>
                <img className='product-image' src={product.image} alt={product.title}/>
                <h4>{product.title}</h4>
                <p>Rating: {product.rating.rate} ({product.rating.count})</p>
                <h5>{product.price}$</h5>
                <button className='btn' onClick={()=>dispatch(add(product))} > Add to cart </button>
            </div>
        ))
    }
</div>
</React.Fragment>
  )
}

export default Products