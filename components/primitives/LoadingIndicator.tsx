import * as React from "react";
import ContentLoader from "react-content-loader";
import styled, { keyframes } from "styled-components";

const PageWideContainer = styled.div`
  position: fixed;
  background: #000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: bounding-box;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #555;
  width: 40px;
  height: 40px;
  animation: ${rotate} 0.5s linear infinite;
`;

const iterator = new Array(10).fill(1);

const LoaderSkeleton: React.FC = () => (
  <ContentLoader
    speed={1}
    width={"100%"}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="170" y="65" rx="3" ry="3" width="220" height="15" />
    <rect x="53" y="42" rx="3" ry="3" width="102" height="88" />
    <rect x="170" y="89" rx="3" ry="3" width="220" height="15" />
  </ContentLoader>
);

const Loader: React.FC = () => {
  return (
    <>
      {iterator.map((_, index) => (
        <LoaderSkeleton key={index} />
      ))}
    </>
  );
};

export const PageWideLoader: React.FC = () => (
  <PageWideContainer>
    <Spinner />
  </PageWideContainer>
);

export default Loader;
