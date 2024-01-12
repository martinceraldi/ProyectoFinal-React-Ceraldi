import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartItemList from "../CartItemList/CartItemList";

const Cart = () => {
  const { removeAllProductCart, getTotalCartPrice, cart } = useCartContext();
  return (
    <div className="is-flex is-justify-content-center mt-6">
      <div
        style={{ width: "60%" }}
        className="is-flex  is-flex-direction-column"
      >
        <div>
          <h5 className="has-text-centered is-size-4 has-text-weight-bold mb-5">
            Shopping Bag
          </h5>
          <CartItemList />
          <div className="is-flex is-justify-content-space-between p-4 has-background-light is-align-items-center">
            <button onClick={removeAllProductCart} className="button is-danger">
              Delete All
            </button>
            <p className="has-text-weight-bold">
              Total: ${getTotalCartPrice()}
            </p>
          </div>
        </div>
        <Link
          to="/checkout"
          className={`button is-success is-light is-align-self-center mt-5 ${
            cart.length == 0 ? "is-hidden" : ""
          }`}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
