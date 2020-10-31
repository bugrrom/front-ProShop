import {
  ADMIN_REMOVE_PRODUCT_FAIL,
  ADMIN_REMOVE_PRODUCT_REQUEST,
  ADMIN_REMOVE_PRODUCT_SUCCESS,
  AdminActionProductType,
} from "../types";

type typeState = {
  loading: boolean;
  error: string;
  success: boolean;
};

const initialState = {
  loading: false,
  error: "",
  success: false,
};

export const removeProductReducer = (
  state: typeState = initialState,
  action: AdminActionProductType
) => {
  switch (action.type) {
    case ADMIN_REMOVE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
      };
    case ADMIN_REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ADMIN_REMOVE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };
    default:
      return state;
  }
};
