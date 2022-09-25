import CategoryItem from "../category-item/Category-Item-component"
import "./categories.styles.scss";


function Catergories({categories}) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
    )
}

export default Catergories