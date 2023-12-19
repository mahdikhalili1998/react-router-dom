import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Data = [
  { id: 1, name: "Iphone" },
  { id: 2, name: "Watch" },
  { id: 3, name: "Book" },
  { id: 4, name: "Clothes" },
];
function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortHandler = () => {
    setSearchParams({ sortby: "قیمت", order: "ارزانترین" });
  };
  return (
    <div>
      <Navbar />
      <h1>Productsss</h1>
      <ul>
        {Data.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={sortHandler}>change query setting</button>
    </div>
  );
}

export default Products;
