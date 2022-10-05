import CategoryItem from "../category-item/Category-Item-component";
import { CategoriesContainer } from "./Categories.styles";

function Catergories({ categories }) {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
}

export default Catergories;
