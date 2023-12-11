import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { itemId } = useParams();
  console.log(product);
  const apicall = () => {
    axios(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    apicall();
  }, [itemId]);
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
