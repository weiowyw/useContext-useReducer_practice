import React, {useContext, useEffect, useState} from 'react';
import {CartC} from "./context/CartContext";

const Home = () => {


    const {handleAddToCart} = useContext(CartC)
    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchProducts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    return (
        <div>
            {products.length && products.map(product => {
                return (
                    <div>
                        <h2>{product.id}</h2>
                        <h3>{product.name}</h3>
                        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                    </div>
                )
            })}
        </div>
    );
};

export default Home;