import * as React from "react";
import styled from "styled-components";

const CTAButton = styled.button`
  padding: 8px 16px;
  background: #0064c7;
  color: #fff;
  cursor: pointer;
  border-radius: 9px;
  &:hover {
    background: #014282;
  }
`;

interface ErrorProps {
  description: string;
  title: string;
  cta?: {
    text: string;
    action: () => void;
  };
}

const ErrorIndicator: React.FC<ErrorProps> = ({ title, description, cta }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {cta && <CTAButton onClick={cta.action}>{cta.text}</CTAButton>}
    </div>
  );
};

export default ErrorIndicator;
