import rootReducer from ".";

describe("rootReducer", () => {
  it("creates the default state", () => {
    expect(rootReducer({}, {})).toEqual({
      search: {
        searchField: "",
      },
      robot: {
        robots: [],
        pending: false,
        error: null,
      }
    });
  });
});