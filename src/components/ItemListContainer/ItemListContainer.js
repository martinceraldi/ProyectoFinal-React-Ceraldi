import { useEffect, useState } from "react";
import ItemList from "../ItemList/itemList";
import axios from "axios";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  let { categoryId } = useParams();

  const apicall = () => {
    const apiUrl = categoryId
      ? `https://fakestoreapi.com/products/category/${categoryId}`
      : "https://fakestoreapi.com/products";

    axios(apiUrl)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    apicall();
  }, [categoryId]);
  return <ItemList products={products} />;
};

export default ItemListContainer;
