import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedProducts = getStoredCart();
        let cartArray = [];
        for (const keys in storedProducts) {
            const addedProduct = products?.find(prd => prd.key === keys);
            if (addedProduct) {
                addedProduct["quantity"] = storedProducts[keys];
                const newCartArray = [...cartArray, addedProduct];
                cartArray = [...newCartArray];
                setCart(cartArray);
            }
        }
    }, [products])
    return [cart, setCart]
}
export default useCart;