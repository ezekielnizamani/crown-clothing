import { useContext } from "react";
import CategoriesPreview from "../../components/cartgories-preview/CategoriesPreview";
import { CategoriesContext } from "../../context/categoriesContext";
const CategoriesPreviews = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
       const products = categoriesMap[title];
        return (
          <CategoriesPreview key={title} title={title} products={products}/ >
        )
       
      })}
    </>
  );
};

export default CategoriesPreviews;
