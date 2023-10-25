import { createAsyncThunk } from "@reduxjs/toolkit";
import { headerOptions } from "../../utils/utils";
import { baseUrl } from "../../utils/baseUrl";

export const calculateFertilizer = createAsyncThunk(
  "calculateFertilizer",
  async (data, token, { rejectWithValue }) => {
    const response = await fetch(
      `${baseUrl}/orders/previewOrder`,
      headerOptions(data, "POST", token)
    );
    try {
      const output = await response.json();
      return output;
    } catch (error) {
      return rejectWithValue;
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
  dispatch(calculateFertilizer(formData));
};
