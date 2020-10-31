import { Dispatch } from "redux";
import {
  ADMIN_CREATE_PRODUCT_FAIL,
  ADMIN_CREATE_PRODUCT_REQUEST,
  ADMIN_CREATE_PRODUCT_SUCCESS,
  ADMIN_REMOVE_PRODUCT_FAIL,
  ADMIN_REMOVE_PRODUCT_REQUEST,
  ADMIN_REMOVE_PRODUCT_SUCCESS,
} from "./types";
import { apiFetch } from "../../../api/api";

export const updateProduct = (update: any, id: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    console.log(update);
    dispatch({
      type: ADMIN_REMOVE_PRODUCT_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${userInfo.token}`,
      },
      body: JSON.stringify({ ...update, id }),
    };
    const response = await fetch(
      `${new apiFetch().getUrl()}api/product/update`,
      config
    );
    const data = await response.json();
    if (response.status !== 200 && 201) {
      dispatch({
        type: ADMIN_REMOVE_PRODUCT_SUCCESS,
        payload: data.message,
      });
    }
    dispatch({
      type: ADMIN_REMOVE_PRODUCT_SUCCESS,
      payload: data.message,
    });
  } catch (e) {
    dispatch({
      type: ADMIN_REMOVE_PRODUCT_FAIL,
      payload: e.message,
    });
  }
};

export const deleteProduct = (id: string) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: ADMIN_REMOVE_PRODUCT_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${userInfo.token}`,
      },
      body: JSON.stringify({ id }),
    };
    const response = await fetch(
      `${new apiFetch().getUrl()}api/product/remove`,
      config
    );
    const data = await response.json();
    if (response.status !== 200 && 201) {
      dispatch({
        type: ADMIN_REMOVE_PRODUCT_FAIL,
        payload: data.message,
      });
    }
    dispatch({
      type: ADMIN_REMOVE_PRODUCT_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: ADMIN_REMOVE_PRODUCT_FAIL,
      payload: e.message,
    });
  }
};

export const createProduct = (product: any) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: ADMIN_CREATE_PRODUCT_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${userInfo.token}`,
      },
      body: JSON.stringify(product),
    };
    const response = await fetch(
      `${new apiFetch().getUrl()}api/product/create`,
      config
    );
    const data = await response.json();
    if (response.status !== 200 && 201) {
      dispatch({
        type: ADMIN_CREATE_PRODUCT_FAIL,
        payload: data.message,
      });
    }
    dispatch({
      type: ADMIN_CREATE_PRODUCT_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: ADMIN_CREATE_PRODUCT_FAIL,
      payload: e.message,
    });
  }
};
