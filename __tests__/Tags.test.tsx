import { render, cleanup } from "@testing-library/react";
import { Tag, TagsContainer } from "../components/primitives";

// test ids
const BASE_ID = "$recipe-app-";
const TAG_TEST_ID = `${BASE_ID}tag`;
const TAG_CONTAINER_TEST_ID = `${BASE_ID}tag-container`;

//mock data
const TAGS = ["Vegan", "Healthy", "Fast-food", "Non-Veg"];
const COLORS = {
  fg: {
    hex: "#45f689",
    rgb: "rgb(69, 246, 137)",
  },
  bg: {
    hex: "#f4f680",
    rgb: "rgb(244, 246, 128)",
  },
  defaults: {
    fg: "rgb(255, 255, 255)",
    bg: "rgb(21, 21, 21)",
  },
};

afterEach(cleanup);

describe("<Tag/>", () => {
  it("should display the text content passed as children", () => {
    const { getByTestId } = render(<Tag>{TAGS[0]}</Tag>);
    expect(getByTestId(TAG_TEST_ID).innerHTML).toEqual(TAGS[0]);
  });
  it("should accept multi-word space separated string constructed with literals", () => {
    const { getByTestId } = render(
      <Tag>{`${TAGS[0]} ${TAGS[1]} ${TAGS[2]}`}</Tag>
    );
    expect(getByTestId(TAG_TEST_ID).innerHTML).toEqual(
      `${TAGS[0]} ${TAGS[1]} ${TAGS[2]}`
    );
  });
  it("should have default colors if color props are not supplied", () => {
    render(<Tag>{TAGS[4]}</Tag>);
    const tagClass = Tag({ children: TAGS[4] }).type.styledComponentId;
    const tagElement = document.getElementsByClassName(tagClass)[0];
    const style = window.getComputedStyle(tagElement);
    expect(style.background).toBe(COLORS.defaults.bg);
    expect(style.color).toBe(COLORS.defaults.fg);
  });
  it("should render the supplid background color prop", () => {
    render(<Tag bg={COLORS.bg.hex}>{TAGS[4]}</Tag>);
    const tagClass = Tag({ children: TAGS[4] }).type.styledComponentId;
    const tagElement = document.getElementsByClassName(tagClass)[0];
    const style = window.getComputedStyle(tagElement);
    expect(style.background).toBe(COLORS.bg.rgb);
    expect(style.color).toBe(COLORS.defaults.fg);
  });
  it("should render the supplid text color prop", () => {
    render(<Tag fg={COLORS.fg.hex}>{TAGS[4]}</Tag>);
    const tagClass = Tag({ children: TAGS[4] }).type.styledComponentId;
    const tagElement = document.getElementsByClassName(tagClass)[0];
    const style = window.getComputedStyle(tagElement);
    expect(style.color).toBe(COLORS.fg.rgb);
    expect(style.background).toBe(COLORS.defaults.bg);
  });
  it("should render both color and background values based on the passed props", () => {
    render(
      <Tag fg={COLORS.fg.hex} bg={COLORS.bg.hex}>
        {TAGS[4]}
      </Tag>
    );
    const tagClass = Tag({ children: TAGS[4] }).type.styledComponentId;
    const tagElement = document.getElementsByClassName(tagClass)[0];
    const style = window.getComputedStyle(tagElement);
    expect(style.color).toBe(COLORS.fg.rgb);
    expect(style.background).toBe(COLORS.bg.rgb);
  });
});

describe("<TagsContainer/>", () => {
  it("Should render a single Tag", () => {
    const { queryAllByTestId, getByTestId } = render(
      <TagsContainer>
        <Tag>{TAGS[2]}</Tag>
      </TagsContainer>
    );
    getByTestId(TAG_CONTAINER_TEST_ID);
    expect(queryAllByTestId(TAG_TEST_ID)).toHaveLength(1);
  });
  it("Should render multiple Tag", () => {
    const { queryAllByTestId, getByTestId } = render(
      <TagsContainer>
        {TAGS.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
    );
    getByTestId(TAG_CONTAINER_TEST_ID);
    expect(queryAllByTestId(TAG_TEST_ID)).toHaveLength(4);
  });
});
