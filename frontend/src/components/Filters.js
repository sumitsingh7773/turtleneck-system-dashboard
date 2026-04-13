import { useState } from "react";

function Filters({ onApply }) {
  const [vendor, setVendor] = useState("");
  const [product, setProduct] = useState("");
  const [ransomware, setRansomware] = useState("");

  const handleApply = () => {
    const appliedFilters = {
      vendor: vendor.trim(),
      product: product.trim(),
      ransomware,
    };

    const cleanedFilters = Object.fromEntries(
      Object.entries(appliedFilters).filter(([_, v]) => v)
    );

    onApply(cleanedFilters);
  };

  const handleReset = () => {
    setVendor("");
    setProduct("");
    setRansomware("");
    onApply({});
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleApply();
  };

  return (
    <div className="card flex">

      <input
        value={vendor}
        placeholder="Search Vendor (e.g. Apple)"
        onChange={(e) => setVendor(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <input
        value={product}
        placeholder="Search Product"
        onChange={(e) => setProduct(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <select
        value={ransomware}
        onChange={(e) => setRansomware(e.target.value)}
      >
        <option value="">All</option>
        <option value="Known">Known</option>
        <option value="Unknown">Unknown</option>
      </select>

      <button onClick={handleApply}>Apply</button>

      <button onClick={handleReset} className="secondary">
        Reset
      </button>

    </div>
  );
}

export default Filters;