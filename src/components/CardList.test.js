import React from "react";
import ShallowRenderer from "react-shallow-renderer";
import { shallow } from "enzyme";
import CardList from "./CardList";
import robots from "../robots";

describe("CardList", () => {
  const renderer = new ShallowRenderer();
  const cardlistHtml = renderer.render(<CardList robots={robots} />);
  const cardlist = shallow(<CardList robots={robots} />);

  it("renders properly", () => {
    expect(cardlistHtml).toMatchSnapshot();
  });

  it("renders Cards", () => {
    expect(cardlist.find("Card").exists()).toBe(true);
  });
});