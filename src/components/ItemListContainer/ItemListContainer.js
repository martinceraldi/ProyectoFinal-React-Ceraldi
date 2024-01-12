import { useEffect } from "react";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../context/ProductsContext";

const ItemListContainer = () => {
  const { products, getProducts } = useProductsContext();
  let { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId);
  }, [categoryId]);
  return <ItemList products={products} />;
};

export default ItemListContainer;
