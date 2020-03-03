import { CHANGE_SEARCH_FIELD } from "../actions/search";

const initialState = {
  searchField: "",
};

export default (search = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...search,
        searchField: action.payload,
      };
    default:
      return search;
  }
};
