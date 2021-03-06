import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = saveCart[key];
            return product;
        })
        setCart(cartProducts);
    }, [])
    return (
        <div className="twin-container">
           <div className="product-container">
            {
                cart.map(pd => <ReviewItem
                    removeProduct={removeProduct}
                    product={pd}
                    key={pd.key}></ReviewItem>)
            }
           </div>
           <div className="cart-container">
               <Cart cart= {cart}></Cart>
           </div>
        </div>
    );
};

export default Review;