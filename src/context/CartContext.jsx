import { createContext, useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductCart = (quantity, product) => {
    if (cart.some((element) => element.product.id == product.id)) {
      return setCart(
        cart.map((element) => {
          if (element.product.id == product.id) {
            element.quantity += quantity;
          }
          return element;
        })
      );
    }
    setCart([...cart, { quantity, product }]);
  };

  const removeProductCart = (productId) => {
    setCart(cart.filter((element) => element.product.id != productId));
  };

  const removeAllProductCart = () => setCart([]);

  const getTotalCartPrice = () =>
    cart.reduce(
      (acc, element) => acc + element.quantity * element.product.price,
      0
    );
  const changeQuantity = (productId, quantity) => {
    setCart(
      cart.map((element) => {
        if (element.product.id == productId) {
          element.quantity = quantity;
        }
        return element;
      })
    );
  };
  const finishCart = async (user) => {
    const order = {
      cart,
      user,
      total: getTotalCartPrice(),
    };
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addProductCart,
        removeProductCart,
        removeAllProductCart,
        getTotalCartPrice,
        changeQuantity,
        finishCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
