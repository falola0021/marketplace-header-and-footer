import * as actions from "../actions/departmentActions/departmentActions";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  departments: [],
  loading: false,
  message: "",
};
export default function departmentReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_DEPARTMENT_SUCCESS:
      return { ...state, department: action.payload };
    case actions.GET_DEPARTMENT_FAILURE:
      return { ...state, loading: action.payload };
    case actions.SET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return { ...state };
  }
}
