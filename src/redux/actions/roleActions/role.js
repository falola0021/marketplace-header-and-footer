import { ROLE_SUCCESS, ROLE_FAIL, SET_MESSAGE } from "./types";

import RoleService from "../../../services/role.service";

export const create = (role, status) => (dispatch) => {
  return RoleService.create(role, status).then(
    (response) => {
      dispatch({
        type: ROLE_SUCCESS,
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
        type: ROLE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
