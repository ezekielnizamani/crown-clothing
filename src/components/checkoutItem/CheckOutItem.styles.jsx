import styled from "styled-components";

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const Span = styled.span`
  width: 23%;
`;
export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
export const Arrow = styled.div`
  cursor: pointer;
`;
export const Value = styled.span`
  margin: 0 10px;
`;
export const Quantity = styled.span`
  display: flex;
`;
export const Price = styled.span`
margin: auto;
text-align: center;

`

// .checkout-item-container {
//     
//     }
//     .name,
//     .quantity,
//     .price {
//       width: 23%;
//     }

//     .quantity {
//       display: flex;

//       .arrow {
//         cursor: pointer;
//       }

//       .value {
//         margin: 0 10px;
//       }
//     }

//     .remove-button {
//       padding-left: 12px;
//       cursor: pointer;
//     }
//   }
