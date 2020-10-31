import {
  ADMIN_EDIT_USER_REQUEST,
  AdminActionType,
  ADMIN_EDIT_USER_FAIL,
  ADMIN_EDIT_USER_SUCCESS,
  ADMIN_RESET_USER,
} from "../types";

type typeState = {
  success: boolean;
  error: string;
  loading: boolean;
};

const initialState = {
  success: false,
  error: "",
  loading: false,
};

export const userEditAdminReducer = (
  state: typeState = initialState,
  action: AdminActionType
) => {
  switch (action.type) {
    case ADMIN_EDIT_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case ADMIN_EDIT_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADMIN_EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ADMIN_RESET_USER:
      return {
        ...state,
        user: {
          isAdmin: false,
          _id: "",
          name: "",
          email: "",
        },
        success: false,
      };
    default:
      return state;
  }
};
