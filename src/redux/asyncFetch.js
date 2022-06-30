import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  loading: false,
  error_: false
};

export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
  const res = await fetch("DB.json").then((data) => data.json());
  return res;
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
      state.error_ = false;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    }
  }
});

//export const { getPosts } = postSlice.actions;
export const postReducer = postSlice.reducer;

//https://blog.logrocket.com/using-redux-toolkits-createasyncthunk/

//this reducer can be excluded from persist
//https://stackoverflow.com/questions/56004783/redux-persist-exclude-one-fieldreducer-from-state
