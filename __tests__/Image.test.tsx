import { render, cleanup } from "@testing-library/react";
import { Image } from "../components/primitives";

const IMAGE_TEST_ID = "$recipe-app-image";

afterEach(cleanup);

describe("<Image/>", () => {
  it("should render image element with proper attributes", () => {
    const { getByTestId, getByAltText } = render(
      <Image src="/dummy.png" alt="dummy image" />
    );
    expect(getByTestId(IMAGE_TEST_ID).getAttribute("src")).toEqual(
      "/dummy.png"
    );
    getByAltText("picture of dummy image");
  });
});
