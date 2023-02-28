import React from "react";
import Hello from "../Components/Hello";
import ReqData from "../Hooks/ReqData";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const url = `https://63fe2779c5c800a7237c2bc0.mockapi.io/api/v1/product?page=1&limit=12`;
  let products = ReqData(url);

  let content = null;

  if (products.error) {
    content = (
      <div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div className="container mx-auto flex items-center flex-col w-full pt-2 px-10">
      <Hello name="User" />
      <h1 className="font-bold text-2xl mb-3 mt-2 px-5">Best Sellers</h1>
      <div className="md:flex flex-wrap md:-mx-3">{content}</div>
    </div>
  );
};

export default Home;
