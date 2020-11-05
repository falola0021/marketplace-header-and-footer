import { USER_SUCCESS, USER_FAIL, SET_MESSAGE } from "./types";

import UserService from "../../../services/user.service";

export const create = (
  firstName,
  lastName,
  email,
  password,
  department,
  role
) => (dispatch) => {
  return UserService.create(
    firstName,
    lastName,
    email,
    password,
    department,
    role
  ).then(
    (response) => {
      dispatch({
        type: USER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: USER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
