import React from 'react';

const Product = (props) => {
    const { name, price, img, seller } = props.product;
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', border: '1px solid blue' }}>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <h4>seller: {seller}</h4>
                <h5 style={{ color: 'rebeccapurple' }}>Price: ${price}</h5>
                <button onClick={() => props.handleAddToCart(props.product)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;