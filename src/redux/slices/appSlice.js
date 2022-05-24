import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FetchApi from "../../utils/FetchApi";
export const getAllData = createAsyncThunk("mobile/allData", async () => {
  const res = await FetchApi("/all-data", "POST");
  return res.data;
});

export const appSlice = createSlice({
  name: "app",
  initialState: {
    allData: {},
    listData: {},
    formValues: {},
    auth: null,
    status: null,
    modal: {
      downModal: {
        open: false,
      },
    },
  },
  reducers: {
    setListData: (state, action) => {
      state.listData[action.payload.prop] = action.payload.value;
    },
    getLocalAllData: (state, action) => {
      state.allData = action.payload;
    },
    addListData: (state, action) => {
      state.listData[action.payload.prop]?.unshift(action.payload.value);
    },
    editListData: (state, action) => {
      state.listData[action.payload.prop] = state.listData[
        action.payload.prop
      ]?.map(l => {
        if (l._id === action.payload.value._id) {
          return action.payload.value;
        } else return l;
      });
    },

    deleteListData: (state, action) => {
      state.listData[action.payload.prop] = state.listData[
        action.payload.prop
      ]?.filter(l => l._id !== action.payload.value._id);
    },
    setModal: (state, action) => {
      state.modal[action.payload.type] = action.payload.value;
    },
    setFormValues: (state, action) => {
      state.formValues[action.payload.prop] = action.payload.value;
    },
    setFormChild: (state, action) => {
      state.formValues[action.payload.prop][action.payload.child] =
        action.payload.value;
    },
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
  extraReducers: {
    [getAllData.pending]: state => {
      state.status = "loading";
    },
    [getAllData.fulfilled]: (state, action) => {
      state.allData = action.payload;
      state.status = "done";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setListData,
  editListData,
  setModal,
  setFormValues,
  addListData,
  setFormChild,
  deleteListData,
  setAuth,
  getLocalAllData,
} = appSlice.actions;

export default appSlice.reducer;
