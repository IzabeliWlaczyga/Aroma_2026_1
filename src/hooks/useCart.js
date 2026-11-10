import {
    useState,
    useEffect
} from "react";


export function useCart() {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("carrinho")) || []
    });

    useEffect(() => {
        localStorage.setItem('carrinho', JSON.stringify(cart));
    }, [cart]);

    const addProductCart = (product) => {
        const exists = cart.find((p) => p.id === product.id);
        if (exists) {
            setCart(cart.map((p) => p.id === product.id ? {
                ...p, quantidade: p.quantidade + 1} : p));
            return false;
        } else { 
            setCart([...cart, {...product,quantidade: 1
            }]);
            return true;
        }
    }

    return {cart, addProductCart };
}