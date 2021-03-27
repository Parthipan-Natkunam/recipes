import * as React from "react";
import styled from "styled-components";

const CardTitle = styled.h5`
  font-size: 1.5rem;
  margin: 0 1rem;
  align-self: center;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 700;
  @media (max-width: 425px) {
    margin: 1rem auto;
    max-width: 100%;
    font-size: 1.25rem;
  }
`;

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => <CardTitle>{text}</CardTitle>;

export default Title;
