import * as React from "react";
import ContentLoader from "react-content-loader";

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

export default Loader;
