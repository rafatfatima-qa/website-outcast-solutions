import React from 'react';
import Product from './Product';

export default function Main1(props) {
  const { products, onAdd } = props;
  return (
    <main1 className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.productId} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main1>
    // <Categories />
  );
}