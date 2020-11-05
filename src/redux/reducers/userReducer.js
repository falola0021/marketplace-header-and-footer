import * as actions from "../actions/userActions/userActions";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  users: [],
  loading: false,
  message: "",
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER_SUCCESS:
      return { ...state, user: action.payload };
    case actions.GET_USER_FAILURE:
      return { ...state, loading: action.payload };
    case actions.SET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return { ...state };
  }
}
