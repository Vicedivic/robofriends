import { CHANGE_SEARCH_FIELD, setSearchField } from "./search";

it("creates an action to set the search field", () => {
  expect(setSearchField("test")).toEqual({
    type: CHANGE_SEARCH_FIELD,
    payload: "test",
  });
});