import {
  ADMIN_EDIT_PRODUCT_FAIL,
  ADMIN_EDIT_PRODUCT_REQUEST,
  ADMIN_EDIT_PRODUCT_SUCCESS,
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

export const editProductReducer = (
  state: typeState = initialState,
  action: AdminActionProductType
) => {
  switch (action.type) {
    case ADMIN_EDIT_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
      };
    case ADMIN_EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ADMIN_EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: true,
        success: false,
      };
    default:
      return state;
  }
};
