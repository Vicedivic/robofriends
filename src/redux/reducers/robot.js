import { GET_ROBOTS, GET_ROBOTS_SUCCESS, GET_ROBOTS_FAIL } from "../actions/robot";

const initialState = {
  robots: [],
  error: null,
  pending: false,
};

export default (robot = initialState, action) => {
  switch (action.type) {
    case GET_ROBOTS:
      return {
        ...robot,
        pending: true,
      };
    case GET_ROBOTS_SUCCESS:
      return {
        ...robot,
        robots: action.payload,
        pending: false,
      };
    case GET_ROBOTS_FAIL:
      return {
        ...robot,
        error: action.payload,
        pending: false,
      };
    default:
      return robot;
  }
};
