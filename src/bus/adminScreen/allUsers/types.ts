import { user } from "../../profileScreen/profileUpdateReducer";

export const ADMIN_USERS_FAIL = "ADMIN_USERS_FAIL";
export type adminUsersFail = {
  type: typeof ADMIN_USERS_FAIL;
  payload: string;
};
export const ADMIN_USERS_REQUEST = "ADMIN_USERS_REQUEST";
export type adminUsersRequest = {
  type: typeof ADMIN_USERS_REQUEST;
};
export const ADMIN_USERS_SUCCESS = "ADMIN_USERS_SUCCESS";
export type adminUsersSuccess = {
  type: typeof ADMIN_USERS_SUCCESS;
  payload: user[];
};

export const ADMIN_EDIT_USER_FAIL = "ADMIN_EDIT_USER_FAIL";
export type adminEditUserFail = {
  type: typeof ADMIN_EDIT_USER_FAIL;
  payload: string;
};
export const ADMIN_EDIT_USER_REQUEST = "ADMIN_EDIT_USER_REQUEST";
export type adminEditUserRequest = {
  type: typeof ADMIN_EDIT_USER_REQUEST;
};
export const ADMIN_EDIT_USER_SUCCESS = "ADMIN_EDIT_USER_SUCCESS";
export type adminEditUserSuccess = {
  type: typeof ADMIN_EDIT_USER_SUCCESS;
  payload: user;
};
export const ADMIN_RESET_USER = "ADMIN_RESET_USER";
export type adminResetUser = {
  type: typeof ADMIN_RESET_USER;
};

export const ADMIN_REMOVE_USER_REQUEST = "ADMIN_REMOVE_USER_REQUEST";
export type adminRemoveUserRequest = {
  type: typeof ADMIN_REMOVE_USER_REQUEST;
};
export const ADMIN_REMOVE_USER_SUCCESS = "ADMIN_REMOVE_USER_SUCCESS";
export type adminRemoveUserSuccess = {
  type: typeof ADMIN_REMOVE_USER_SUCCESS;
  payload: user;
};
export const ADMIN_REMOVE_USER_FAIL = "ADMIN_REMOVE_USER_FAIL";
export type adminRemoveUserFail = {
  type: typeof ADMIN_REMOVE_USER_FAIL;
  payload: string;
};

export const ADMIN_USER_FAIL = "ADMIN_USER_FAIL";
export type adminUserFail = {
  type: typeof ADMIN_USER_FAIL;
  payload: string;
};
export const ADMIN_USER_SUCCESS = "ADMIN_USER_SUCCESS";
export type adminUserSuccess = {
  type: typeof ADMIN_USER_SUCCESS;
  payload: user;
};
export const ADMIN_USER_REQUEST = "ADMIN_USER_REQUEST";
export type adminUserRequest = {
  type: typeof ADMIN_USER_REQUEST;
};
export type AdminActionType =
  | adminUsersFail
  | adminUsersRequest
  | adminUsersSuccess
  | adminEditUserFail
  | adminEditUserRequest
  | adminEditUserSuccess
  | adminResetUser
  | adminRemoveUserRequest
  | adminRemoveUserSuccess
  | adminRemoveUserFail
  | adminUserFail
  | adminUserSuccess
  | adminUserRequest;
