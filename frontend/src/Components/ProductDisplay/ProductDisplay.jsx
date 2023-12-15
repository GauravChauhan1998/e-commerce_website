import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)

    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Top in sweatshirt fabric made from a cotton blend. Relaxed fit with dropped shoulders and ribbing around the neckline, cuffs and hem. Soft brushed inside.
            </div>
            <div className="productsidplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div className={selectedSize === 'S' ? 'selected' : 'notSelected'} onClick={() => handleSizeClick('S')}>
                        S
                    </div>
                    <div className={selectedSize === 'M' ? 'selected' : 'notSelected'} onClick={() => handleSizeClick('M')}>
                        M
                    </div>
                    <div className={selectedSize === 'L' ? 'selected' : 'notSelected'} onClick={() => handleSizeClick('L')}>
                        L
                    </div>
                    <div className={selectedSize === 'XL' ? 'selected' : 'notSelected'} onClick={() => handleSizeClick('XL')}>
                        XL
                    </div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category : </span>Women, T-Shirt, Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags : </span>Modern, Latest</p>

        </div>
    </div>
  )
}

export default ProductDisplay