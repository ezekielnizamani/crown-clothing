import React from "react";
import "./CategoriesPreview.scss";
import ProductCard from "../products-card/ProductCard";
import { Link } from "react-router-dom";
const CategoriesPreview = ({ title, products }) => {
  //   console.log(products);

  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title}>{title.toLowerCase()}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoriesPreview;
