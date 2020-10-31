export const ADMIN_REMOVE_PRODUCT_FAIL = "ADMIN_REMOVE_PRODUCT_FAIL";
export type adminRemoveProductFail = {
  type: typeof ADMIN_REMOVE_PRODUCT_FAIL;
  payload: string;
};
export const ADMIN_REMOVE_PRODUCT_REQUEST = "ADMIN_REMOVE_PRODUCT_REQUEST";
export type adminRemoveProductRequest = {
  type: typeof ADMIN_REMOVE_PRODUCT_REQUEST;
};
export const ADMIN_REMOVE_PRODUCT_SUCCESS = "ADMIN_REMOVE_PRODUCT_SUCCESS";
export type adminRemoveProductSuccess = {
  type: typeof ADMIN_REMOVE_PRODUCT_SUCCESS;
  payload: string;
};

export const ADMIN_EDIT_PRODUCT_FAIL = "ADMIN_EDIT_PRODUCT_FAIL";
export type adminEditProductFail = {
  type: typeof ADMIN_EDIT_PRODUCT_FAIL;
  payload: string;
};
export const ADMIN_EDIT_PRODUCT_REQUEST = "ADMIN_EDIT_PRODUCT_REQUEST";
export type adminEditProductRequest = {
  type: typeof ADMIN_EDIT_PRODUCT_REQUEST;
};
export const ADMIN_EDIT_PRODUCT_SUCCESS = "ADMIN_EDIT_PRODUCT_SUCCESS";
export type adminEditProductSuccess = {
  type: typeof ADMIN_EDIT_PRODUCT_SUCCESS;
  payload: string;
};

export const ADMIN_CREATE_PRODUCT_FAIL = "ADMIN_CREATE_PRODUCT_FAIL";
export type adminCreateProductFail = {
  type: typeof ADMIN_CREATE_PRODUCT_FAIL;
  payload: string;
};
export const ADMIN_CREATE_PRODUCT_REQUEST = "ADMIN_CREATE_PRODUCT_REQUEST";
export type adminCreateProductRequest = {
  type: typeof ADMIN_CREATE_PRODUCT_REQUEST;
};
export const ADMIN_CREATE_PRODUCT_SUCCESS = "ADMIN_CREATE_PRODUCT_SUCCESS";
export type adminCreateProductSuccess = {
  type: typeof ADMIN_CREATE_PRODUCT_SUCCESS;
};

export type AdminActionProductType =
  | adminRemoveProductFail
  | adminRemoveProductRequest
  | adminRemoveProductSuccess
  | adminEditProductFail
  | adminEditProductRequest
  | adminEditProductSuccess
  | adminCreateProductFail
  | adminCreateProductRequest
  | adminCreateProductSuccess;
