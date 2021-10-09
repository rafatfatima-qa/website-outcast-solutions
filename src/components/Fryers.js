import React from "react";
import CategoriesCard from "./CategoriesCard";
import Data from './Data'

const Categories = () => {
   return (
    <>
      <div className="wrapper">
        {Data
          .filter((product) => product.tag === "fryer")
          .map((product) => (
            <CategoriesCard
              key={product.productId}
              name={product.productName}
              image={product.image}
              isLiked={product.isLiked}
              tag={product.tag}
              price={product.price}
            />
          ))}
      </div>
    </>
  );
};
export default Categories;
