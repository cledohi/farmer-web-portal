import { createAsyncThunk } from "@reduxjs/toolkit";
import { headerOptions } from "../../utils/utils";
import { baseUrl } from "../../utils/baseUrl";

// actions
export const createFarmerAccount = createAsyncThunk(
  "createAccount",
  async (data, { rejectWithValue }) => {
    const option = headerOptions({ data, method: "POST" });
    const url = `${baseUrl}/addFarmer`;
    const response = await fetch(url, option);
    try {
      const results = await response.json();
      return results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const assignLandToFarmer = createAsyncThunk(
  "assignLand",
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
    const url = `${baseUrl}/farmer/assignLand`;
    const option = headerOptions({ data, method: "POST", token });
    const response = await fetch(url, option);
    try {
      const output = await response.json();
      return output;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const handelLandAssignForm = (
  event,
  setValidated,
  dispatch,
  username
) => {
  const form = event.currentTarget;
  console.log(form);
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  setValidated(true);
  event.preventDefault();
  const { elements } = form;
  const {
    width: { value: width },
    height: { value: height },
    addressName: { value: addressName },
  } = elements;
  const formData = {
    addressName,
    height,
    width,
    username,
  };
  dispatch(assignLandToFarmer(formData));
};
export const handelFormAccountCreation = (event, dispatch, setValidated) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  setValidated(true);
  event.preventDefault();
  const { elements } = form;
  const {
    firstName: { value: firstName },
    lastName: { value: lastName },
    phone: { value: phoneNumber },
    nationalId: { value: nationalId },
    address: { value: address },
    password: { value: password },
  } = elements;
  const formData = {
    username: phoneNumber,
    phoneNumber,
    password,
    firstName,
    lastName,
    nationalId,
    address,
  };
  dispatch(createFarmerAccount(formData));
};
