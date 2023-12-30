import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './CartItems.css'
import remove_icon from '../Assets/remove_icon.png'
import add_icon from '../Assets/add_icon.png'
import { useNavigate } from 'react-router-dom'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart,addToCart} = useContext(ShopContext);
    const navigate = useNavigate();
    const handleSubmit = event => {
      event.preventDefault();
      navigate('/address');
    };
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <div className='cartitems-quantity-container'>
                                    <img className='cartitems-remove-icon' src={add_icon} onClick={()=>{addToCart(e.id)}} alt="" />
                                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                                </div>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                
                            </div>
                            <hr />
                        </div>                
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button onClick={handleSubmit}>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    </div>
  )
}

export default CartItems