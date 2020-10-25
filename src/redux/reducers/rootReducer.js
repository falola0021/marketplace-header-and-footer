import { combineReducers } from "redux";
import vendorReducer from "./vendorReducer";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";

export default combineReducers({
  vendorReducer,
  authReducer,
  messageReducer,

  noReducer: (state = {}) => state,
});
