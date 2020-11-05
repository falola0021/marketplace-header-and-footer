import * as actions from "../actions/roleActions/roleActions";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  role: [],
  loading: false,
  message: "",
};
export default function roleReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ROLE_SUCCESS:
      return { ...state, role: action.payload };
    case actions.GET_ROLE_FAILURE:
      return { ...state, loading: action.payload };
    case actions.SET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return { ...state };
  }
}
