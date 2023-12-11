import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card column is-one-quarter m-5">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={product.image} alt="Prodcuct" />
        </figure>
      </div>

      <div className="card-content">
        <div className="content">
          <h2>{product.title}</h2>
          <Link className="is-size-5" to={`/item/${product.id}`}>
            Ver Información
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
