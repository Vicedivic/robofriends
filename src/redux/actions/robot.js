import axios from "axios";

const prefix = "[robot]";
export const GET_ROBOTS = `${prefix} Get`;
export const GET_ROBOTS_SUCCESS = `${prefix} Fetch success`;
export const GET_ROBOTS_FAIL = `${prefix} Fetch fail`;

export const getRobots = () => async dispatch => {
  dispatch({
    type: GET_ROBOTS,
  });

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res =>
      dispatch({
        type: GET_ROBOTS_SUCCESS,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ROBOTS_FAIL,
        payload: err,
      })
    );
};
