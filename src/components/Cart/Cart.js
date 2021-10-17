import React from 'react';


const Cart = ({ cart }) => {
    let quantity = 0;
    let price = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        quantity = quantity + product?.quantity;
        price = price + product.price * product?.quantity;
    }
    return (
        <div>
            <h3>Items ordered:{quantity}</h3>
            <p>Items: ${price.toFixed(2)}</p>
            <p>Shipping and Handling: ${(price * 0.05).toFixed(2)}</p>
            <p>Total before tax: ${(price + (price * 0.05)).toFixed(2)}</p>
            <p>Estimated tax: ${((price + (price * 0.05)) * .1).toFixed(2)}</p>
            <p>Order Total: ${((price + (price * 0.05)) + ((price + (price * 0.05)) * .1)).toFixed(2)}</p>
        </div>
    );
};

export default Cart;