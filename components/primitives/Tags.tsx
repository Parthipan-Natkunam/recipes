import * as React from "react";
import styled from "styled-components";

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0;
`;

export const Tag = styled.span`
  margin: 0.25rem;
  padding: 0.25rem 1rem;
  background: ${(props) => props.bg ?? "#151515"};
  color: ${(props) => props.fg ?? "#fff"};
  border-radius: 50px;
`;
