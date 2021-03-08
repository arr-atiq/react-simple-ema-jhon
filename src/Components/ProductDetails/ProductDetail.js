import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const products = fakeData.find(product => product.key === productKey)
    console.log(products);
    return (
        <div>
            <h1>{productKey} is coming</h1>
            <Product product ={products}
            showAddToCart = {false}></Product>
        </div>
    );
};

export default ProductDetail;