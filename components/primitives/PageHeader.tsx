import * as React from "react";

interface PageHeaderProps {
  title: string;
  hasUnderline?: boolean;
}

const PageHeader = ({ title, hasUnderline = true }) => (
  <>
    <h1>{title}</h1>
    {hasUnderline && <hr />}
  </>
);

export default PageHeader;
