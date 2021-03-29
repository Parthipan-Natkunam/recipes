import * as React from "react";
import styled from "styled-components";
const PageContainer = styled.div`
  padding: 1rem;
  background: ${(props) => props.bg ?? "#d3dce0"};
  min-height: 100vh;
`;

export default PageContainer;
