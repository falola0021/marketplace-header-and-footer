import * as actions from "../actions/vendorActions/vendorActions";

const initialState = {
  vendor: [],
  loading: false,
};
export default function vendorReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_VENDOR_SUCCESS:
      return { ...state, vendor: action.payload };
    case actions.GET_VENDOR_FAILURE:
      return { ...state, loading: action.payload };
    default:
      return { ...state };
  }
}
