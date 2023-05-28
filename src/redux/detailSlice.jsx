import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const cardDetail = {
  params: "",
  detail: null,
  isLoading: true,
  error: null,
};

const filmDetail = {
  isLoading: true,
  characters: [],
  error: null,
};

export const getDetail = createAsyncThunk(
  "detail/getDetail",
  async (url, thunkAPI) => {
    try {
      const { data } = axios(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getFilmDetail = createAsyncThunk(
  "characters/getFilmDetail",
  async (url, thunkAPI) => {
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState: { cardDetail, filmDetail },
  reducers: {
    handleParams: (state, { payload }) => {
      state.cardDetail.params = payload;
    },
    handleDetail: (state, { payload }) => {
      state.cardDetail.detail = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetail.pending, (state) => {
        state.cardDetail.isLoading = true;
      })
      .addCase(getDetail.fulfilled, (state, { payload }) => {
        state.cardDetail.params = payload.params;
        state.cardDetail.detail = payload.detail;
        state.cardDetail.isLoading = false;
      })
      .addCase(getDetail.rejected, (state, { payload }) => {
        state.cardDetail.error = payload;
        state.cardDetail.isLoading = false;
      })
      .addCase(getFilmDetail.pending, (state) => {
        state.filmDetail.isLoading = true;
      })
      .addCase(getFilmDetail.fulfilled, (state, { payload }) => {
        let arr = state.filmDetail.characters;
        state.filmDetail.characters = [...arr, payload];
        state.filmDetail.isLoading = false;
      })
      .addCase(getFilmDetail.rejected, (state, { payload }) => {
        state.filmDetail.error = payload;
      });
  },
});

export const { handleParams, handleDetail } = detailSlice.actions;
export default detailSlice.reducer;
