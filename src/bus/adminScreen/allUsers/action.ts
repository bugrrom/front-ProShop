import { Dispatch } from "redux";
import {
  ADMIN_EDIT_USER_FAIL,
  ADMIN_EDIT_USER_REQUEST,
  ADMIN_EDIT_USER_SUCCESS,
  ADMIN_REMOVE_USER_FAIL,
  ADMIN_REMOVE_USER_REQUEST,
  ADMIN_REMOVE_USER_SUCCESS,
  ADMIN_RESET_USER,
  ADMIN_USER_FAIL,
  ADMIN_USER_REQUEST,
  ADMIN_USER_SUCCESS,
  ADMIN_USERS_FAIL,
  ADMIN_USERS_REQUEST,
  ADMIN_USERS_SUCCESS,
} from "./types";

export const getAllUsers = () => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch({
      type: ADMIN_USERS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const configGet = {
      method: "GET",
      headers: {
        Authorization: `Basic ${userInfo.token}`,
      },
    };
    const response = await fetch(
      `http://localhost:4000/api/user/users`,
      configGet
    );
    const data = await response.json();
    if (response.status !== 200 && 201) {
      dispatch({
        type: ADMIN_USERS_FAIL,
        payload: data.message,
      });
    }
    dispatch({
      type: ADMIN_USERS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: ADMIN_USERS_FAIL,
      payload: e.message,
    });
  }
};

export const getUserByEdit = (values: any, id: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: ADMIN_EDIT_USER_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const configGet = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${userInfo.token}`,
      },
      body: JSON.stringify(values),
    };
    const response = await fetch(
      `http://localhost:4000/api/user/updateUser/${id}`,
      configGet
    );
    const data = await response.json();
    if (response.status !== 200 && 201) {
      dispatch({
        type: ADMIN_EDIT_USER_FAIL,
        payload: data.message,
      });
    }
    dispatch({
      type: ADMIN_EDIT_USER_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: ADMIN_EDIT_USER_FAIL,
      payload: e.message,
    });
  }
};

export const getUserOneInfo = (id: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: ADMIN_USER_REQUEST,
    });
    dispatch({
      type: ADMIN_RESET_USER,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const configGet = {
      method: "GET",
      headers: {
        Authorization: `Basic ${userInfo.token}`,
      },
    };
    const response = await fetch(
      `http://localhost:4000/api/user/${id}`,
      configGet
    );
    const data = await response.json();
    if (response.status !== 200 && 201) {
      dispatch({
        type: ADMIN_USER_FAIL,
        payload: data.message,
      });
    }
    dispatch({
      type: ADMIN_USER_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: ADMIN_USER_FAIL,
      payload: e.message,
    });
  }
};

export const deleteUser = (id: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: ADMIN_REMOVE_USER_REQUEST,
    });
    dispatch({
      type: ADMIN_RESET_USER,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const configGet = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${userInfo.token}`,
      },
      body: JSON.stringify({ id }),
    };
    const response = await fetch(
      `http://localhost:4000/api/user/remove`,
      configGet
    );
    const data = await response.json();
    if (response.status !== 200 && 201) {
      dispatch({
        type: ADMIN_REMOVE_USER_FAIL,
        payload: data.message,
      });
    }
    dispatch({
      type: ADMIN_REMOVE_USER_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: ADMIN_REMOVE_USER_FAIL,
      payload: e.message,
    });
  }
};
