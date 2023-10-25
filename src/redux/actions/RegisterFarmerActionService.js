import { createAsyncThunk } from "@reduxjs/toolkit";
import { headerOptions } from "../../utils/utils";
import { baseUrl } from "../../utils/baseUrl";

// actions
export const createFarmerAccount = createAsyncThunk(
  "createAccount",
  async (data, { rejectWithValue }) => {
    const option = headerOptions({ data, method: "POST" });
    console.log(option);
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
