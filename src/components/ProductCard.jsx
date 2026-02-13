import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Button } from '@mui/material';


const ProductCard = ({ product, onRemove }) => {
  return (
    <div className={`${styles.card} ${
    !product.inStock ? `${styles.outOfStock} outOfStockClass` : ""
  }`}>
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
      {/* TODO: Display product name */}
      <h2>{product.name}</h2>

      {/* TODO: Display product price */}
      <p>{product.price}</p>

      {/* TODO: Show if the product is in stock or out of stock */}
      {product.inStock ? "In Stock" : "Out of Stock"}

      <Button
  variant="outlined"
  color="error"
  onClick={() => onRemove(product.id)}
>
  Remove
</Button>
    </div>
  );
};

export default ProductCard;
