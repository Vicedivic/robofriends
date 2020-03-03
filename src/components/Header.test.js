import React from "react";
import ShallowRenderer from "react-shallow-renderer";
import Header from "./Header";

describe("Header", () => {
  const renderer = new ShallowRenderer();
  const headerHtml = renderer.render(<Header />);

  it("renders properly", () => {
    expect(headerHtml).toMatchSnapshot();
  });
});