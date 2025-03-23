import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Product Details</h1>
      <h2>Product ID:{params.productId}</h2>
    </>
  );
}
export default ProductDetail;
