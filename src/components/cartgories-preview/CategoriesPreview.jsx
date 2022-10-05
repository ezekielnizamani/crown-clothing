import React from "react";
import {CategoriesPreviewContainer,Title,Preview} from  "./CategoriesPreview.styles.jsx";
import ProductCard from "../products-card/ProductCard";
import { Link } from "react-router-dom";
const CategoriesPreview = ({ title, products }) => {
  //   console.log(products);

  return (
    <CategoriesPreviewContainer>
      <Title>
        <Link to={title}>{title.toLowerCase()}</Link>
      </Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
