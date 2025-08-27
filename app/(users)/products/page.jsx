import React from "react";
import ProductsList from "./ProductsList";

const Products = async ({ searchParams }) => {
  const searchParam = await searchParams;
  console.log("outer:", searchParam);

  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || "1";

  return (
    <>
      {/* <h1>Search Params</h1> */}
      <div>
        <ProductsList />
        Showing {category} products, sorted by {sort}, page {page}
      </div>
    </>
  );
};

export default Products;
