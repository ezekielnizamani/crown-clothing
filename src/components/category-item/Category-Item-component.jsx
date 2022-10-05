import styled from "styled-components";
import { CategoryContainer,CategoryBodyContainer,Heading2,Paragraph} from "./Category-item.styles.jsx";
function CategoryItem({ category }) {
  const { title, imageUrl } = category;
  const BackgroundImage = styled.div`
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    background-image: url(${imageUrl});
    background-color:red;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  `;
  return (
    <CategoryContainer>
      <BackgroundImage />
      <CategoryBodyContainer>
        <Heading2>{title}</Heading2>
        <Paragraph>Show now </Paragraph>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
}

export default CategoryItem;
