import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { finishCart, removeAllProductCart } = useCartContext();
  const [orderId, setOrderId] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, lastName, email, emailConfirmation, phone } =
      Object.fromEntries(formData);

    if (email != emailConfirmation) {
      return setError("Email confirmation must be equal to first one");
    }

    setOrderId(
      await finishCart({
        name,
        lastName,
        email,
        phone,
      })
    );
    removeAllProductCart();
  };
  return (
    <div className="is-flex is-justify-content-center">
      {orderId ? (
        <div className="mt-6 ">
          <h3 className=" is-size-3">Thanks you for your purchase:</h3>
          <p className="mt-4 has-text-weight-bold">
            Your order id is: {orderId}
          </p>
          <Link to="/" className="button is-info is-rounded mt-4">
            Go Home
          </Link>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ width: "40%" }}
          className="mt-6 box has-background-link-light "
        >
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                required
                name="name"
                className="input"
                type="text"
                placeholder="e.g Alex Smith"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">LastName</label>
            <div className="control">
              <input
                required
                name="lastName"
                className="input"
                type="text"
                placeholder="e.g Alex Smith"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone</label>
            <div className="control">
              <input
                required
                name="phone"
                className="input"
                type="text"
                placeholder="e.g Alex Smith"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                required
                name="email"
                className="input"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email Confirmation</label>
            <div className="control">
              <input
                required
                name="emailConfirmation"
                className="input"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              />
            </div>
          </div>
          <button className="button is-success is-rounded my-4">Send</button>
          {error && (
            <div className="notification is-danger">
              <button
                onClick={() => setError(false)}
                type="button"
                className="delete"
              ></button>
              {error}
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default Checkout;
