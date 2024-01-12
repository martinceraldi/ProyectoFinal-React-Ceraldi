import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useProductsContext } from "../../context/ProductsContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { getProductById } = useProductsContext();
  let { itemId } = useParams();
  console.log(product);

  useEffect(() => {
    const getById = async () => setProduct(await getProductById(itemId));
    getById();
  }, [itemId]);
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
