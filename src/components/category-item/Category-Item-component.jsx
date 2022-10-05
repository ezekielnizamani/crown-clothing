import { useNavigate } from "react-router-dom";
import { CategoryContainer,CategoryBodyContainer,Heading2,Paragraph,BackgroundImage} from "./Category-item.styles.jsx";
function CategoryItem({ category }) {
  const { title, imageUrl,route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = ()=> navigate(route)
  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage image={imageUrl} />
      <CategoryBodyContainer>
        <Heading2>{title}</Heading2>
        <Paragraph>Show now </Paragraph>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
}

export default CategoryItem;
