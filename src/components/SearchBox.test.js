import React from "react";
import ShallowRenderer from "react-shallow-renderer";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  const mockOnSearchChange = jest.fn();
  const renderer = new ShallowRenderer();
  const searchboxHtml = renderer.render(
    <SearchBox searchChange={mockOnSearchChange} />
  );

  it("renders properly", () => {
    expect(searchboxHtml).toMatchSnapshot();
  });
});
