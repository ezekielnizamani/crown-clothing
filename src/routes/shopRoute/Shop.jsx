import { Routes,Route } from "react-router-dom";
import CategoriesPreviews from "../categories-preview/CategoriesPreviews";
import Category from "../category/Category";
const Shop = () => {
  return (
  
    <Routes>
      <Route index element={<CategoriesPreviews/>}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
