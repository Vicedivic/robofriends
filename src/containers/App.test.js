import React from "react";
import { create, act } from "react-test-renderer";
import { mount } from "enzyme";
import ShallowRenderer from "react-shallow-renderer";
import axios from "axios";
import App from "./App";
import robotData from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";

describe("App", () => {
  const mockOnSearchChange = jest.fn();
  const renderer = new ShallowRenderer();
  const appHtml = renderer.render(<App />);
  const app = mount(
    <App
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

  describe("on mount", () => {
    const axiosGetSpy = jest
      .spyOn(axios, "get")
      .mockResolvedValueOnce({ data: robotData });
    const consoleOutput = [];
    const originalConsoleLog = console.log;

    beforeEach(() => {
      console.log = output => consoleOutput.push(output);
    });

    afterEach(() => {
      console.log = originalConsoleLog;
    });

    it("successfully fetches data from api", async () => {
      await act(async () => {
        create(<App />);
      });
      expect(axiosGetSpy).toBeCalledWith(
        "https://jsonplaceholder.typicode.com/users"
      );
    });

    it("logs error on fetch fail", async () => {
      axios.get.mockImplementation(
        () =>
          new Promise((resolve, reject) => {
            return reject("Testing error");
          })
      );

      await act(async () => {
        create(<App />);
      });

      expect(consoleOutput).toEqual(expect.arrayContaining(["Testing error"]));
    });
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
});
