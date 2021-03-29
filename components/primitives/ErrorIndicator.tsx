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
    <div data-testid="$recipe-app-error">
      <h2 data-testid="$recipe-app-error-title">{title}</h2>
      <p data-testid="$recipe-app-error-description">{description}</p>
      {cta && (
        <CTAButton onClick={cta.action} data-testid="$recipe-app-error-cta">
          {cta.text}
        </CTAButton>
      )}
    </div>
  );
};

export default ErrorIndicator;
