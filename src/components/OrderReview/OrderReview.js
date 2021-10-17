import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';

const OrderReview = () => {
    const { products } = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div style={{ padding: "30px" }}>
            <h2>Order Review</h2>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default OrderReview;