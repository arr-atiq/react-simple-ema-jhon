import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shippingCost = 0;
    if (total > 35) {
        shippingCost = 0;
    }
    else if (total > 15) {
        shippingCost = 4.99;
    }
    else if (total > 0) {
        shippingCost = 12.99;
    }
    const vat = total / 10;
    const grandTotal = total + shippingCost + vat;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h1>Order summary</h1>
            <h5>Items Ordered: {cart.length}</h5>
            <h5>Product Price: {formatNumber(total)}</h5>
            <h5>Shipping Cost: {formatNumber(shippingCost)}</h5>
            <h5>Total Cost: {formatNumber(grandTotal)}</h5>
            <Link to="/review">
                <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;