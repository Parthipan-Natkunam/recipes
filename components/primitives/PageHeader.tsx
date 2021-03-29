import * as React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-weight: 800;
`;

const HeadingUnderline = styled.hr`
  border-color: #e7f2f7;
`;

interface PageHeaderProps {
  title: string;
  hasUnderline?: boolean;
}

const PageHeader = ({ title, hasUnderline }) => (
  <>
    <Heading data-testid="$recipe-app-page-title">{title}</Heading>
    {hasUnderline && (
      <HeadingUnderline data-testid="$recipe-app-page-title-underline" />
    )}
  </>
);

export default PageHeader;
