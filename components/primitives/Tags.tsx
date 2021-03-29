import * as React from "react";
import styled from "styled-components";

const StyledTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0;
`;

const StyledTag = styled.span`
  margin: 0.25rem;
  padding: 0.25rem 1rem;
  background: ${(props) => props.bg ?? "#151515"};
  color: ${(props) => props.fg ?? "#fff"};
  border-radius: 50px;
`;

interface TagProps {
  bg?: string;
  fg?: string;
  children: string | string[];
}

export const Tag: React.FC<TagProps> = ({ children, bg, fg }) => (
  <StyledTag data-testid="$recipe-app-tag" bg={bg} fg={fg}>
    {children}
  </StyledTag>
);

export const TagsContainer: React.FC = ({ children }) => (
  <StyledTagsContainer data-testid="$recipe-app-tag-container">
    {children}
  </StyledTagsContainer>
);
