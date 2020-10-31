import {
  ADMIN_USER_FAIL,
  ADMIN_USER_REQUEST,
  ADMIN_USER_SUCCESS,
  AdminActionType,
} from "../types";

type typeState = {
  user: {
    isAdmin: boolean;
    _id: string;
    name: string;
    email: string;
  };
  error: string;
  loading: boolean;
};

const initialState = {
  user: {
    isAdmin: false,
    _id: "",
    name: "",
    email: "",
  },
  error: "",
  loading: false,
};

export const userDetailsReducer = (
  state: typeState = initialState,
  action: AdminActionType
) => {
  switch (action.type) {
    case ADMIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADMIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};
