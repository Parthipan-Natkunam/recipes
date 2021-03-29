import { render, cleanup, fireEvent } from "@testing-library/react";
import { Error } from "../components/primitives";

const ERROR_TEST_ID = "$recipe-app-error";
const CTA_ID = `${ERROR_TEST_ID}-cta`;
const TITLE_ID = `${ERROR_TEST_ID}-title`;
const DESCRIPTION_ID = `${ERROR_TEST_ID}-description`;

afterEach(cleanup);

describe("<Error/>", () => {
  it("should show error title and description only when cta prop not passed", () => {
    const { getByTestId, queryByTestId } = render(
      <Error description="This is a test message" title="test title" />
    );
    getByTestId(ERROR_TEST_ID);
    getByTestId(TITLE_ID);
    getByTestId(DESCRIPTION_ID);
    expect(queryByTestId(CTA_ID)).toBeFalsy();
  });
  it("should render CTA button with proper text when cta props is passed", () => {
    const { getByTestId } = render(
      <Error
        description="This is a test message"
        title="test title"
        cta={{ text: "CTA Button", action: () => {} }}
      />
    );
    getByTestId(ERROR_TEST_ID);
    getByTestId(TITLE_ID);
    getByTestId(DESCRIPTION_ID);
    getByTestId(CTA_ID);
    expect(getByTestId(CTA_ID).innerHTML).toEqual("CTA Button");
  });
  it("should call the cta action handler on CTA button click", () => {
    const mockCTAAction = jest.fn();
    const { getByTestId } = render(
      <Error
        description="This is a test message"
        title="test title"
        cta={{ text: "CTA Button", action: mockCTAAction }}
      />
    );
    fireEvent.click(getByTestId(CTA_ID));
    expect(mockCTAAction).toHaveBeenCalledTimes(1);
  });
});
