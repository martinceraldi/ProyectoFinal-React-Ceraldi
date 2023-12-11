import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="is-flex is-flex-wrap-wrap columns is-8 is-variable is-justify-content-center mt-5">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
