import { combineReducers } from "redux";
import vendorReducer from "./vendorReducer";
import roleReducer from "./roleReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import departmentReducer from "./departmentReducer";
import messageReducer from "./messageReducer";

export default combineReducers({
  vendorReducer,
  roleReducer,
  authReducer,
  messageReducer,
  userReducer,
  departmentReducer,

  noReducer: (state = {}) => state,
});
