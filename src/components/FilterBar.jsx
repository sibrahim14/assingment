import React from "react";

const FilterBar = ({ setCategory, setSortPrice, setSearch }) => {
  return (
    <div className="filter-bar">

      {/* Search */}
      <input
        type="text"
        placeholder="Search innerwear..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select>

      {/* Sort */}
      <select onChange={(e) => setSortPrice(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

    </div>
  );
};

export default FilterBar;
