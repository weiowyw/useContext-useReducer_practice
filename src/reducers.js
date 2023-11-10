import {ADD_TO_CART, REMOVE_FROM_CART} from "./pages/constants";

export const initialState = {
    totalPrice: 0,
    totalProducts: 0,
    products: []
}

const calcTotalPrice = (products) => {
    return products.reduce((total, item) => total + item.id * item.qty, 0)
}

const calcTotalProducts = (products) => {
    return products.reduce((total, item) => total + item.qty, 0)
}

export const reducer = (store, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const rightProduct = store.products.find(product => product.id === action.payload.id);
            if (!rightProduct) {
                const validProducts = [...store.products, {...action.payload, qty: 1}]
                return {
                    ...store,
                    products: validProducts,
                    totalPrice: calcTotalPrice(validProducts),
                    totalProducts: calcTotalProducts(validProducts),
                }
            }

            const updatedProducts = store.products.map(product => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        qty: product.qty + 1
                    }
                }
                return product;
            })

            return {
                ...store,
                products: updatedProducts,
                totalPrice: calcTotalPrice(updatedProducts),
                totalProducts: calcTotalProducts(updatedProducts)
            }

        case REMOVE_FROM_CART:
            if (action.payload.qty > 1) {
                const reupdatedProducts = store.products.map(product => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            qty: product.qty - 1
                        }
                    }
                    return product;
                })
                return {
                    ...store,
                    products: reupdatedProducts,
                    totalPrice: calcTotalPrice(reupdatedProducts),
                    totalProducts: calcTotalProducts(reupdatedProducts)
                }
            }

            const filteredProducts = store.products.filter((product) => product.id !== action.payload.id)
            return {
                ...store,
                products: filteredProducts,
                totalPrice: calcTotalPrice(filteredProducts),
                totalProducts: calcTotalProducts(filteredProducts)
            }

        default: return store;
    }
}

