import { VENDOR_SUCCESS, VENDOR_FAIL, SET_MESSAGE } from "./types";

import VendorService from "../../../services/vendor.service";

export const create = (
  name,
  address,
  city,
  state,
  email,
  phone,
  bank,
  accountName,
  accountNumber,
  isVerified
) => (dispatch) => {
  return VendorService.create(
    name,
    address,
    city,
    state,
    email,
    phone,
    bank,
    accountName,
    accountNumber,
    isVerified
  ).then(
    (response) => {
      dispatch({
        type: VENDOR_SUCCESS,
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
        type: VENDOR_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
