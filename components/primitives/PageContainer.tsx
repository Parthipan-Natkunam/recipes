import * as React from "react";
import styled from "styled-components";
const StyledPageContainer = styled.div`
  padding: 1rem;
  background: ${(props) => props.bg ?? "#d3dce0"};
  min-height: 100vh;
`;

interface PageContainerProps {
  children: React.ReactNode;
  bg?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, bg }) => (
  <StyledPageContainer bg={bg} data-testid="$recipe-app-pagecontainer">
    {children}
  </StyledPageContainer>
);

export default PageContainer;
