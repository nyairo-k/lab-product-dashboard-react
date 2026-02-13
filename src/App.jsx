import React, { useState } from 'react';
import ProductList from './components/ProductList';
import data from '../db.json';
import { Button, Stack } from '@mui/material';

const App = () => {
  // TODO: Define initial product data
  const [products, setProducts] = useState(data.products);

  // TODO: Implement state to manage filtering
    // filter state
  const [filter, setFilter] = useState("all");

  const handleRemove = (id) => {
  setProducts(products.filter(product => product.id !== id));
};


  // TODO: Implement logic to filter products based on availability
    const filteredProducts = products.filter(product => {
    if (filter === "inStock") return product.inStock === true;
    if (filter === "outOfStock") return product.inStock === false;
    return true; // show all
  });

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}
        <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" onClick={() => setFilter("all")}>
          All
        </Button>
        <Button variant="contained" color="success" onClick={() => setFilter("inStock")}>
          In Stock
        </Button>
        <Button variant="contained" color="error" onClick={() => setFilter("outOfStock")}>
          Out of Stock
        </Button>
      </Stack>

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts}  onRemove={handleRemove}/>
    </div>
  );
};

export default App;
