import * as React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 0.5rem;
  margin: 1.5rem 0.25rem;
  background: #fff;
  display: flex;
  box-shadow: 0px 3px 8px rgb(0 0 0 / 35%), 0px 0px 8px rgb(0 0 0 / 30%),
    -6px 0px 8px rgb(0 0 0 / 15%);
  border-radius: 12px;
  cursor: pointer;
  flex-wrap: wrap;
  min-width: 150px;
  @media (max-width: 425px) {
    flex-direction: column;
  } ;
`;

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <StyledCard>{children}</StyledCard>
);

export default Card;