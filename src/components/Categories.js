import React from 'react';
import CategoriesCard from './CategoriesCard'


const Categories = () => {

    let products = [{
        productName: 'Nike Man\'s Flex',
        image: `"images/nike-shoes.jpg" alt="nike-shoes-red" width="173" height="120" class = "imageClass"`,
        isLiked: false,
        tag: "footwear",
        price: "$100"
      },
      {
        productName: "Nike shoes black",
        image:`<img src="images/nike-black-shoes.jpg" alt="nike-shoes-black" width="173" height="120" class = "imageClass">`,
        isLiked: true,
        tag: "footwear",
        price: "$1100"
      }]


    return (
        <>
           <div className="wrapper">

            {products.map((item) => (
            <CategoriesCard
            key = {item.productName}
            
            name = {item.productName}
            image = {item.image}
            isLiked = {item.isLiked} 
            tag = {item.tag}
            price = {item.price}
            />
            ))}

</div>
        </>
  );
}
export default Categories;