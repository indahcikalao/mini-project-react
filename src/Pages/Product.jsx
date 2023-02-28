import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import ReqData from "../Hooks/ReqData";

const Product = () => {
  const { id } = useParams();
  const url = `https://63fe2779c5c800a7237c2bc0.mockapi.io/api/v1/product/${id}`;

  let product = ReqData(url);

  let content = null;

  if (product.error) {
    content = (
      <div className="bg-red-300 p-3">
        There was an error please refresh or try again later.
      </div>
    );
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3 text-center">
          {product.data.name}
        </h1>
        <div>
          <img src={product.data.images} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl my-3"> $ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex items-center flex-col w-full pt-2 px-5 pb-10">
      {content}
    </div>
  );
};

export default Product;
