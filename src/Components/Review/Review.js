import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
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
            const product = fakeData.find(pd => pd.key == key)
            product.quantity = saveCart[key];
            return product;
        })
        setCart(cartProducts);
    }, [])
    return (
        <div>
            <h1>added item{cart.length}</h1>
            {
                cart.map(pd => <ReviewItem
                    removeProduct={removeProduct}
                    product={pd}
                    key={pd.key}></ReviewItem>)
            }
        </div>
    );
};

export default Review;