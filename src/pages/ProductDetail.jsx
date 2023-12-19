import React from "react";
import { useParams } from "react-router-dom";
function ProductDetail() {
  const params = useParams();
  console.log(params);
  return <div>ProductDetail</div>;
}

export default ProductDetail;
