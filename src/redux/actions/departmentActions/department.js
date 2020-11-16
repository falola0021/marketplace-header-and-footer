import { DEPARTMENT_SUCCESS, DEPARTMENT_FAIL, SET_MESSAGE } from "./types";

import DepartmentService from "../../../services/department.service";

export const create = (name, hod, description) => (dispatch) => {
  return DepartmentService.create(name, hod, description).then(
    (response) => {
      dispatch({
        type: DEPARTMENT_SUCCESS,
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
        type: DEPARTMENT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
