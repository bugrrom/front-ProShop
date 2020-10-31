import {
  ADMIN_REMOVE_USER_FAIL,
  ADMIN_REMOVE_USER_REQUEST,
  ADMIN_REMOVE_USER_SUCCESS,
  AdminActionType,
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

export const userRemoveAdminReducer = (
  state: typeState = initialState,
  action: AdminActionType
) => {
  switch (action.type) {
    case ADMIN_REMOVE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case ADMIN_REMOVE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADMIN_REMOVE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    default:
      return state;
  }
};
