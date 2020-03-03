import searchReducer from "./search";
import { CHANGE_SEARCH_FIELD } from "../actions/search";

describe("search", () => {
  it("updates the state when the search field changes", () => {
    expect(searchReducer(null, { type: CHANGE_SEARCH_FIELD, payload: "test" })).toEqual({
      searchField: "test",
    });
  });
});