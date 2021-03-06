import React from "react";
import ShallowRenderer from "react-shallow-renderer";
import Card from "./Card";

describe("Card", () => {
  const props = { id: 1, name: "John Doe", email: "john@doe.com" };
  const renderer = new ShallowRenderer();
  const cardHtml = renderer.render(<Card {...props} />);

  it("renders properly", () => {
    expect(cardHtml).toMatchSnapshot();
  });
});