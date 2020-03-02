import React from "react";
import ShallowRenderer from "react-shallow-renderer";
import Scroll from "./Scroll";

describe("Scroll", () => {
  const renderer = new ShallowRenderer();
  const scrollHtml = renderer.render(<Scroll />);

  it("renders properly", () => {
    expect(scrollHtml).toMatchSnapshot();
  });
});