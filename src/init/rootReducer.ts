import { combineReducers } from "redux";
import { productsReducer } from "../bus/homeScreen/productsReducer";
import { productReducer } from "../bus/productScreen/productReducer";
import { cartReducer } from "../bus/cartScreen/cartReducer";
import { userLoginReducer } from "../bus/authScreen/login/loginReducer";
import { userRegisterReducer } from "../bus/authScreen/registration/registerReducer";
import { userUpdateReducer } from "../bus/profileScreen/profileUpdateReducer";
import { orderReducer } from "../bus/placeOrderScreen/orderReducer";
import { orderDetailsReducer } from "../bus/orderScreen/orderDetailsReducer";
import { userListReducer } from "../bus/adminScreen/allUsers/reducers/usersAdminReducer";
import { userDetailsReducer } from "../bus/adminScreen/allUsers/reducers/userAdminReducer";
import { userEditAdminReducer } from "../bus/adminScreen/allUsers/reducers/userEditAdminReducer";
import { userRemoveAdminReducer } from "../bus/adminScreen/allUsers/reducers/removeUserAdminReducer";
import { removeProductReducer } from "../bus/adminScreen/products/reducers/removeProductReducer";
import { editProductReducer } from "../bus/adminScreen/products/reducers/editProductReducer";
import { createProductReducer } from "../bus/adminScreen/products/reducers/createProductReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  order: orderReducer,
  orderDetails: orderDetailsReducer,
  userList: userListReducer,
  userDetails: userDetailsReducer,
  userEditAdmin: userEditAdminReducer,
  userRemoveAdmin: userRemoveAdminReducer,
  removeProduct: removeProductReducer,
  editProduct: editProductReducer,
  createProduct: createProductReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
