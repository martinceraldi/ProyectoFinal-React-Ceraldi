const ItemDetail = ({ product }) => {
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
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
