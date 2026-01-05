import { useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

const Home = ({ addToCart }) => {
  const [category, setCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState("");
  const [search, setSearch] = useState(""); 

  let filteredProducts = productsData;

  // Category filter
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      p => p.category === category
    );
  }

  //  Search filter
  if (search) {
    filteredProducts = filteredProducts.filter(
      p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sort by price
  if (sortPrice === "low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortPrice === "high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <FilterBar
        setCategory={setCategory}
        setSortPrice={setSortPrice}
        setSearch={setSearch}   
      />

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
