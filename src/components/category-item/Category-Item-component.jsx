import { CategoryContainer,CategoryBodyContainer,Heading2,Paragraph,BackgroundImage} from "./Category-item.styles.jsx";
function CategoryItem({ category }) {
  const { title, imageUrl } = category;
  
  return (
    <CategoryContainer>
      <BackgroundImage image={imageUrl} />
      <CategoryBodyContainer>
        <Heading2>{title}</Heading2>
        <Paragraph>Show now </Paragraph>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
}

export default CategoryItem;
