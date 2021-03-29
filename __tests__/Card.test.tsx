import { render, cleanup, fireEvent } from "@testing-library/react";
import { Card } from "../components/primitives";

const CARD_TEST_ID = "$recipe-app-card";

afterEach(cleanup);

describe("<Card/>", () => {
  it("should render all children", () => {
    const { getByTestId, queryAllByTestId } = render(
      <Card clickHandler={() => {}}>
        <h1 data-testid="card-child">Test</h1>
        <p data-testid="card-child">Lorem Ipsum</p>
      </Card>
    );
    getByTestId(CARD_TEST_ID);
    expect(queryAllByTestId("card-child")).toHaveLength(2);
  });
  it("should call click handler on click", () => {
    const mockClickHandler = jest.fn();
    const { getByTestId } = render(
      <Card clickHandler={mockClickHandler}>
        <h1 data-testid="card-child">Test</h1>
      </Card>
    );
    fireEvent.click(getByTestId(CARD_TEST_ID));
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});
