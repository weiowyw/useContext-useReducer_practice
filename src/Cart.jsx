import React, {useContext} from 'react';
import {CartC} from "./context/CartContext";


const Cart = () => {

    const {store, handleRemoveFromCart} = useContext(CartC)

    return (
        <div>
            <div>
                <h1>Total ID amount: {store.totalPrice}</h1>
                <h1>Total products: {store.totalProducts}</h1>
            </div>
            {store.products.length > 0 && store.products.map(product => {
                return (
                    <div>

                        {product.qty}
                        <h2>{product.id}</h2>
                        <h3>{product.name}</h3>
                        <button onClick={() => handleRemoveFromCart(product)}>Remove from cart</button>
                    </div>
                )
            })}
        </div>
    );
};

export default Cart;