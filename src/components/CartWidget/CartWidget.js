import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useCartContext();
  return (
    <Link to="/cart">
      <IoCart />
      {cart.reduce((acc, element) => acc + element.quantity, 0)}
    </Link>
  );
};
export default CartWidget;
