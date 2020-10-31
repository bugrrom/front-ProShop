import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../init/rootReducer";
import { ModalProduct } from "./Modal/ModalProduct";
import { ProductsDashboard } from "./productDashboard/ProductsDashboard";
import { listProducts } from "../../homeScreen/action";
import { listProductDetails } from "../../productScreen/action";
import { deleteProduct, updateProduct } from "./action";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 70%;
  @media (max-width: 1200px) {
    width: 85%;
  }
`;

type typeProps = {
  history: any;
};

export const AdminAllProducts: FC<typeProps> = ({ history }: typeProps) => {
  const userLogin = useSelector((state: AppState) => state.userLogin);
  const allProducts = useSelector((state: AppState) => state.products);
  const productInfo = useSelector((state: AppState) => state.product);
  const { error, loading, products, success } = allProducts;
  const productDelete = useSelector((state: AppState) => state.removeProduct);
  const {
    error: errorDelete,
    success: successDelete,
    loading: loadingDelete,
  } = productDelete;
  const productEdit = useSelector((state: AppState) => state.editProduct);
  const {
    error: errorEdit,
    success: successEdit,
    loading: loadingEdit,
  } = productEdit;
  const [activeModal, setActive] = useState(false);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete, successEdit]);
  console.log(successEdit);
  const closeModal = () => {
    setActive(false);
  };
  const editMode = (id: string) => {
    setActive(true);
    dispatch(listProductDetails(id));
  };
  const createProduct = () => {
    history.push("/createProduct");
  };
  const removeProduct = (id: string) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id));
    }
  };
  const editProduct = (value: any, id: string) => {
    dispatch(updateProduct(value, id));
  };
  return (
    <Container>
      {!activeModal ? null : productInfo.product.name ? (
        <ModalProduct
          productInfo={productInfo}
          updateProduct={editProduct}
          onClick={closeModal}
        />
      ) : null}
      <Wrapper>
        <ProductsDashboard
          removeProduct={removeProduct}
          productCreate={createProduct}
          loading={loading}
          error={errorDelete}
          products={products}
          editMode={editMode}
        />
      </Wrapper>
    </Container>
  );
};
