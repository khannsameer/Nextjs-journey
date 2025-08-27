"use client";
import { useSearchParams } from "next/navigation";

const ProductsList = () => {
  const searchParams = useSearchParams();

  const pages = searchParams.getAll("page");
  const category = searchParams.get("category");

  console.log("page:", pages);
  console.log("category:", category);

  return (
    <>
      <h1>Client useSearchParams</h1>
    </>
  );
};

export default ProductsList;
