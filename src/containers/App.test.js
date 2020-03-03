import React from "react";
import { create, act } from "react-test-renderer";
import { mount } from "enzyme";
import ShallowRenderer from "react-shallow-renderer";
import { App, mapStateToProps } from "./App";
import robotData from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";

describe("App", () => {
  const mockGetRobots = jest.fn();
  const props = {
    searchField: "",
    setSearchField: jest.fn(),
    robot: { robots: robotData, pending: false, error: null },
    getRobots: mockGetRobots,
  };
  const mockOnSearchChange = jest.fn();
  const renderer = new ShallowRenderer();
  let appHtml = renderer.render(<App {...props} />);
  const app = mount(
    <App
      {...props}
      children={
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={mockOnSearchChange} />
          <Scroll>
            <CardList robots={robotData} />
          </Scroll>
        </div>
      }
    />
  );

  it("renders properly", () => {
    expect(appHtml).toMatchSnapshot();
  });

  describe("when fetching robots", () => {
    afterEach(() => {
      props.robot.pending = false;
      appHtml = renderer.render(<App {...props} />);
    });
    
    it("returns h1", () => {
      props.robot.pending = true;
      appHtml = renderer.render(<App {...props} />);
      expect(appHtml).toMatchInlineSnapshot(`
        <h1>
          Loading
        </h1>
      `);
    });
  });

  it("calls the get robots action on mount", () => {
    act(() => {
      create(<App {...props} />);
    });
    expect(mockGetRobots).toHaveBeenCalled();
  });

  describe("when input is typed into the search field", () => {
    beforeEach(() => {
      app
        .find("SearchBox")
        .find("input")
        .simulate("change", { target: { value: "test" } });
    });

    it("calls the on search function", () => {
      // expect(mockOnSearchChange.mock.calls[0][0]).toBe("test");
    });
  });

  describe("mapStateToProps", () => {
    it("returns the correct props", () => {
      expect(mapStateToProps({ search: { searchField: "test" }, robot: {} })).toEqual({ searchField: "test", robot: {} });
    });
  });
});
