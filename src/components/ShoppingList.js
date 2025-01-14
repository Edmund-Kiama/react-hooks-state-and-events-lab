import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [val, setVal] = useState("All")
  const [productsArray, setProductsArray] = useState(items)

  const handleChange = (e) => {
    const selectedCategory = e.target.value
    setVal(selectedCategory)
    
    selectedCategory === "All" ?
      setProductsArray(items) :
      setProductsArray(items.filter(item => item.category === selectedCategory))
  
}
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange} value={val}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {productsArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
