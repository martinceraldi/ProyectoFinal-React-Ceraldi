import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductCart } = useCartContext();
  const [sentToCart, setSentToCart] = useState(false);

  const add = () => {
    setQuantity(quantity + 1);
  };
  const remove = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const goToCart = () => {
    addProductCart(quantity, product);
    setSentToCart(true);
  };
  return (
    <div className="card column is-one-quarter m-5">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={product.image} alt="Placeholder image" />
        </figure>
      </div>

      <div className="card-content">
        <div className="content">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="is-flex is-justify-content-space-between">
            {sentToCart ? (
              <Link to="/cart" className="button is-warning is-light">
                Go to Cart
              </Link>
            ) : (
              <>
                <div className="is-flex is-align-items-center">
                  <button onClick={remove} className="button is-success mr-2">
                    -
                  </button>
                  <button onClick={add} className="button is-success mr-3">
                    +
                  </button>
                  <span className="is-size-4 has-text-weight-bold">
                    {quantity}
                  </span>
                </div>
                <button onClick={goToCart} className="button is-link is-light">
                  Send to Cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
