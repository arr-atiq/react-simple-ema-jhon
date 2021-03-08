import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key} = props.product;
    const reviewStyle = {
        borderBottom: "2px solid lightgray",
        marginLeft: "10px",
        marginBottom: "5px",
        paddingBottom: "10px"
    }
    return (
        <div style={reviewStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <h5>Quantity: {quantity}</h5>
            <br/>
            <button 
            onClick = {()=> props.removeProduct(key)}
            className="main-button">Remove </button>
        </div>
    );
};

export default ReviewItem;