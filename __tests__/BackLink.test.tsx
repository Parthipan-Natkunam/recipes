import { render, cleanup } from "@testing-library/react";
import { BackLink } from "../components/primitives";

const ANCHOR_TEST_ID = `$recipe-app-back-link-anchor`;

const LINK_URL = "/home";
const LINK_TEXT = "Back to Home";

afterEach(cleanup);

describe("<BackLink/>", () => {
  it("should render passed link as href and with passed text as ancjor tag text", () => {
    const { getByTestId } = render(
      <BackLink link="/home" as="/home" text="Back to Home" />
    );
    getByTestId(ANCHOR_TEST_ID);
    expect(getByTestId(ANCHOR_TEST_ID).innerHTML).toBe(LINK_TEXT);
    expect(getByTestId(ANCHOR_TEST_ID).getAttribute("href")).toEqual(LINK_URL);
  });
});
