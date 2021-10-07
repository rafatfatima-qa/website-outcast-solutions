import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  let products = [
    {
      productId: "1",
      productName: "Fryer",
      image: "../assets/Fryer.png",
      isLiked: false,
      tag: "fryer",
      price: "$100",
    },
    {
      productId: "2",
      productName: "Propane Cylinder",
      image: "../assets/cylinder.jpg",
      isLiked: true,
      tag: "cylinder",
      price: "$200",
    },

    {
      productId: "3",
      productName: "Propane Cylinder",
      image: "../assets/cylinder.jpg",
      isLiked: true,
      tag: "cylinder",
      price: "$200",
    },
  ];

  return (
    <>
      <div className="wrapper">
        {products
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
