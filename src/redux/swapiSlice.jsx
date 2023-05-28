import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const categories = {
  categories: [],
  isLoading: true,
  error: null,
  active: "starships",
};

const group = "starships";

const itemList = {
  itemList: [],
  isLoading: true,
  error: null,
  pageCount: null,
  pageArray: [],
  page: 1,
  activeBtn: 1,
};

export const getCategories = createAsyncThunk(
  "categories/getStates",
  async (url, thunkAPI) => {
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getItemList = createAsyncThunk(
  "itemList/getStates",
  async (url, thunkAPI) => {
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const swapiSlice = createSlice({
  name: "swapi",
  initialState: { categories, itemList, group },
  reducers: {
    handleGroup: (state, { payload }) => {
      state.group = payload;
    },
    handlePage: (state, { payload }) => {
      state.itemList.page = payload;
    },
    handleActiveBtn: (state, { payload }) => {
      state.itemList.activeBtn = payload;
    },
    handleActiveCategory: (state, { payload }) => {
      state.categories.active = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.categories.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories.categories = Object.keys(payload);
        state.categories.isLoading = false;
      })
      .addCase(getCategories.rejected, (state, { payload }) => {
        state.categories.error = payload;
        state.categories.isLoading = false;
      })
      // get item list funcitons
      .addCase(getItemList.pending, (state) => {
        state.itemList.isLoading = true;
      })
      .addCase(getItemList.fulfilled, (state, { payload }) => {
        let arr = [];
        state.itemList.pageCount = Math.ceil(payload.count / 10);
        state.itemList.itemList = payload.results;
        state.itemList.isLoading = false;
        for (let index = 1; index <= state.itemList.pageCount; index++) {
          arr.push(index);
        }
        state.itemList.pageArray = arr;
      })
      .addCase(getItemList.rejected, (state, { payload }) => {
        state.itemList.error = payload;
        state.itemList.isLoading = false;
      });
  },
});

export const {
  handleGroup,
  handlePage,
  handleActiveBtn,
  handleActiveCategory,
} = swapiSlice.actions;

export default swapiSlice.reducer;
