import * as React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  flex: 0 1 auto;
  @media (max-width: 425px) {
    margin: 1rem auto;
    max-width: 100%;
  }
`;

const CardTitle = styled.h6`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 600;
`;

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => (
  <TitleContainer data-testid="$recipe-app-title-container">
    <CardTitle data-testid="$recipe-app-title">{text}</CardTitle>
  </TitleContainer>
);

export default Title;
