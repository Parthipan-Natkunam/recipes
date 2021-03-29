import { render, cleanup } from "@testing-library/react";
import { PageHeader } from "../components/primitives";

const HEADING_ID = "$recipe-app-page-title";
const HR_ID = `${HEADING_ID}-underline`;

afterEach(cleanup);

describe("<PageHeader/>", () => {
  it("should not render hr element if hasUnderline is false", () => {
    const { getByTestId, queryByTestId } = render(
      <PageHeader title="test page" />
    );
    expect(getByTestId(HEADING_ID).innerHTML).toEqual("test page");
    expect(queryByTestId(HR_ID)).toBeFalsy();
  });
  it("should render hr element if hasUnderline is true", () => {
    const { getByTestId } = render(
      <PageHeader title="test page" hasUnderline />
    );
    getByTestId(HR_ID);
  });
});
