import * as actions from "../actions/vendorActions/vendorActions";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  vendor: [],
  loading: false,
  message: "",
};
export default function vendorReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_VENDOR_SUCCESS:
      return { ...state, vendor: action.payload };
    case actions.GET_VENDOR_FAILURE:
      return { ...state, loading: action.payload };
    case actions.SET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return { ...state };
  }
}
