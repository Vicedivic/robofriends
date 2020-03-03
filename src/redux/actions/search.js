const prefix = "[search]";
export const CHANGE_SEARCH_FIELD = `${prefix} Change search field`;

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
