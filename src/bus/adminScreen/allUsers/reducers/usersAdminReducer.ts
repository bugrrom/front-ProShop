import {
  ADMIN_RESET_USER,
  ADMIN_USERS_FAIL,
  ADMIN_USERS_REQUEST,
  ADMIN_USERS_SUCCESS,
  AdminActionType,
} from "../types";

type typeState = {
  allUser: user[];
  error: string;
  loading: boolean;
};
type user = {
  isAdmin: boolean;
  _id: string;
  name: string;
  email: string;
};
const initialState = {
  allUser: [],
  error: "",
  loading: false,
};

export const userListReducer = (
  state: typeState = initialState,
  action: AdminActionType
) => {
  switch (action.type) {
    case ADMIN_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADMIN_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        allUser: action.payload,
      };

    default:
      return state;
  }
};
