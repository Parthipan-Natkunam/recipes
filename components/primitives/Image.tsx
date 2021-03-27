import * as React from "react";
import styled from "styled-components";

const CardImage = styled.img`
  border-radius: 12px;
  margin-right: 1rem;
  width: 150px;
  height: 150px;
  @media (max-width: 425px) {
    margin: 1rem auto;
    justify-item: center;
    height: auto;
    width: calc(100vw - 50%);
    min-width: 142px;
  }
`;

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <CardImage src={src} alt={`picture of ${alt}`} />;
};

export default Image;
