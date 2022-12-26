import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
import { NavLink } from 'react-router-dom'


const Cart = () => {
  const cartSelector = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <div className='cartWrapper' style={{marginTop: '30px'}}>
      <div> {   cartSelector.length ? 
            <div>
            {
                cartSelector.map((product)=>(  
                    <div className='cartCard' key={product.id}>
                        <img className='product-image' src={product.image} alt={product.title}/>
                        <h4>{product.title}</h4>
                        <p>Rating: {product.rating.rate} ({product.rating.count})</p>
                        <h5>{product.price}$</h5>
                        <button className='btn' onClick={()=>dispatch(remove(product.id))}> Remove from cart </button>
                    </div>
                ))
            }
            </div>

      : <h2 className='dark' style={{marginBottom: '100px', marginTop: '100px'}} > Cart is empty </h2>
     
      } </div>

    </div>
  )
}

export default Cart