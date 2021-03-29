import { render, cleanup } from "@testing-library/react";
import { Title } from "../components/primitives";

const TITLE_ID = "$recipe-app-title";
const WRAPPER_ID = `${TITLE_ID}-container`;

afterEach(cleanup);

describe("<Title/>", () => {
  it("should have a wrapping container", () => {
    const { getByTestId } = render(<Title text="test" />);
    getByTestId(WRAPPER_ID);
  });
  it("should render passed text props", () => {
    const { getByTestId } = render(<Title text="test" />);
    getByTestId(TITLE_ID);
    expect(getByTestId(TITLE_ID).innerHTML).toEqual("test");
  });
});
