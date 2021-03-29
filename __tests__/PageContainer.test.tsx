import { render, cleanup } from "@testing-library/react";
import { PageContainer } from "../components/primitives";

const PAGECONTAINER_ID = "$recipe-app-pagecontainer";
const COLORS = {
  default: "rgb(211, 220, 224)",
  custom: "rgb(69, 246, 137)",
};

afterEach(cleanup);

describe("<PageContainer/>", () => {
  it("should render children with default background color", () => {
    const { getByTestId, queryAllByTestId } = render(
      <PageContainer>
        <h1 data-testid="test-child">test</h1>
        <hr data-testid="test-child" />{" "}
      </PageContainer>
    );
    getByTestId(PAGECONTAINER_ID);
    expect(queryAllByTestId("test-child")).toHaveLength(2);
    const pageClass = PageContainer({ children: <hr /> }).type
      .styledComponentId;
    const containerElement = document.getElementsByClassName(pageClass)[0];
    const style = window.getComputedStyle(containerElement);
    expect(style.background).toBe(COLORS.default);
  });
  it("should render custom background color", () => {
    render(
      <PageContainer bg="#45f689">
        <hr data-testid="test-child" />{" "}
      </PageContainer>
    );
    const pageClass = PageContainer({ children: <hr /> }).type
      .styledComponentId;
    const containerElement = document.getElementsByClassName(pageClass)[0];
    const style = window.getComputedStyle(containerElement);
    expect(style.background).toBe(COLORS.custom);
  });
});
