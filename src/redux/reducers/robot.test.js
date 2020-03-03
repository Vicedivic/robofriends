import robotReducer from "./robot";
import {
  GET_ROBOTS,
  GET_ROBOTS_FAIL,
  GET_ROBOTS_SUCCESS
} from "../actions/robot";
import robotData from "../../robots";

describe("robot", () => {
  it("sets pending to true when get robots action is dispatched", () => {
    const result = robotReducer(undefined, { type: GET_ROBOTS });
    expect(result).toHaveProperty("pending", true);
  });

  it("updates the robots on get robots success", () => {
    const result = robotReducer(
      {
        robots: [],
        pending: true,
        error: null,
      },
      { type: GET_ROBOTS_SUCCESS, payload: robotData }
    );
    expect(result).toHaveProperty("robots", robotData);
    expect(result).toHaveProperty("pending", false);
  });

  it("updates the robots on get robots success", () => {
    const result = robotReducer(
      {
        robots: [],
        pending: true
      },
      { type: GET_ROBOTS_FAIL, payload: "test fail" }
    );
    expect(result).toHaveProperty("pending", false);
    expect(result).toHaveProperty("error", "test fail");
  });
});
