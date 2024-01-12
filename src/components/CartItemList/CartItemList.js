import { useCartContext } from "../../context/CartContext";

const CartItemList = () => {
  const { cart, removeProductCart, changeQuantity } = useCartContext();
  return (
    <div>
      {cart.map((element) => (
        <div
          style={{ borderTop: "1px solid grey" }}
          className="is-flex is-justify-content-space-between is-align-items-center p-4"
        >
          <button
            onClick={() => removeProductCart(element.product.id)}
            className="button is-danger is-light"
          >
            X
          </button>
          <img
            style={{ width: "100px" }}
            src={element.product.image}
            alt={element.product.title}
          />
          <h5>{element.product.title}</h5>

          <div className="is-flex is-align-items-center">
            <button
              onClick={() =>
                element.quantity > 1 &&
                changeQuantity(element.product.id, element.quantity - 1)
              }
              className="button is-primary is-light"
            >
              -
            </button>
            <span className="is-size-4 has-text-weight-bold mx-4">
              {element.quantity}
            </span>
            <button
              onClick={() =>
                changeQuantity(element.product.id, element.quantity + 1)
              }
              className="button is-primary is-light"
            >
              +
            </button>
          </div>
          <p>${element.product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
