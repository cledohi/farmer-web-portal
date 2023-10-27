import { createAsyncThunk } from "@reduxjs/toolkit";
import { headerOptions } from "../../utils/utils";
import { baseUrl } from "../../utils/baseUrl";
// Functions and exports

// actions
export const requestAuthoService = createAsyncThunk(
  "loginAction",
  async (data, { rejectWithValue }) => {
    const option = headerOptions({ data, method: "POST" });

    const url = `${baseUrl}/authenticate`;
    const response = await fetch(url, option);
    try {
      const results = await response.json();
      return results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handelLogin = (event, dispatch, setValidated) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  setValidated(true);
  event.preventDefault();
  const { elements } = form;
  const {
    username: { value: username },
    password: { value: password },
  } = elements;
  const formData = {
    username,
    password,
  };
  dispatch(requestAuthoService(formData));
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const validateResponse = (state, action) => {
  const payload = action?.payload;
  if (payload) {
    const { status, message, data } = payload;
    console.log(`${status}, ${message},${data}`);
    if (status === 200) {
      state.success = true;
      state.error = false;
      switch (action.type) {
        case "loginAction/fulfilled":
          state.loginUser = payload;
          state.messageError = null;
          state.isToken = true;
          break;
        case "calculateFertilizer/fulfilled":
          state.messageError = null;
          state.calculator = data;
          state.isCal = true;
          break;
        case "createAccount/fulfilled":
          state.messageError = message;
          state.isToken = false;
          break;
        case "submitOrder/fulfilled":
          state.messageError = null;
          state.calculator = null;
          state.isCal = false;
          state.messageError = message;
          break;
        default:
          break;
      }
    } else {
      state.error = true;
      state.messageError = message;
      state.success = false;
      state.isCal = false;
    }
  } else {
    state.error = true;
    state.messageError = null;
    state.success = false;
    state.isCal = false;
  }
};
