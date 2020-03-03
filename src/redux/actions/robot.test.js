import {
  getRobots,
  GET_ROBOTS,
  GET_ROBOTS_FAIL,
  GET_ROBOTS_SUCCESS
} from "./robot";
import { act } from "@testing-library/react";
import axios from "axios";
import robotData from "../../robots";

describe("getRobots", () => {
  const dispatch = jest.fn();

  describe("fetches successfully", () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce({ data: robotData });

    act(() => {
      getRobots()(dispatch);
    });

    it("dispatches the get robots action", () => {
      expect(dispatch).toHaveBeenCalledWith({
        type: GET_ROBOTS
      });
    });

    it("dispatches the get robots success action", () => {
      expect(dispatch).toBeCalledWith({
        type: GET_ROBOTS_SUCCESS,
        payload: robotData
      });
    });
  });

  describe("fails to fetch", () => {
    axios.get.mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          return reject("Testing error");
        })
    );

    act(() => {
      getRobots()(dispatch);
    });

    it("dispatches the get robots fail action", () => {
      expect(dispatch).toBeCalledWith({
        type: GET_ROBOTS_FAIL,
        payload: "Testing error",
      });
    });
  });
});
