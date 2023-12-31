import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { headerOptions } from "../../utils/utils";
import { baseUrl } from "../../utils/baseUrl";
import { getAllOrderByUserName } from "./dataTableAction";

export const setIsCal = createAction("orderDetail/setIsCal");

export const setOrderRequest = createAction("orderDetail/setOrderRequest");

export const calculateFertilizer = createAsyncThunk(
  "calculateFertilizer",
  async (data, { rejectWithValue, getState }) => {
    const state = getState();
    const {
      app: {
        user: {
          loginUser: {
            data: { token },
          },
        },
      },
    } = state;
    const options = headerOptions({ data, method: "POST", token });

    const response = await fetch(`${baseUrl}/orders/previewOrder`, options);
    try {
      const output = await response.json();
      return output;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const submitFertilizerOrder = createAsyncThunk(
  "submitOrder",
  async (data, { rejectWithValue, getState, dispatch }) => {
    const state = getState();
    const {
      app: {
        user: {
          loginUser: {
            data: { token },
          },
        },
      },
    } = state;
    const options = headerOptions({ data, method: "POST", token });

    const response = await fetch(`${baseUrl}/orders/sendOrder`, options);
    try {
      const output = await response.json();
      dispatch(getAllOrderByUserName({}));
      return output;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handelOrderFormData = (event, dispatch, setValidated) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  setValidated(true);
  event.preventDefault();
  const { elements } = form;
  const {
    Land: { value: Land },
    Fertilizer: { value: Fertilizer },
    Seeds: { value: Seeds },
  } = elements;
  const formData = {
    landId: Land,
    seedId: Seeds,
    fertilizerId: Fertilizer,
  };
  dispatch(setOrderRequest(formData));
  dispatch(calculateFertilizer(formData));
};
