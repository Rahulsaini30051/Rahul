import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";


export const getUsers= createAsyncThunk(
    "api/users",
    async (pageNumber) => {
      return fetch(`https://reqres.in/api/users?page=${pageNumber}`).then((res) =>
        res.json()
      );
    }
  );
  
  
  const userSlice  = createSlice({
    name: "users",
    initialState:{
      cat_api_status: null,
      user: [],
      total: null,
      per_page: null,
      current_page: null
    },
    reducers: {},
    extraReducers: {
      [getUsers.pending]: (state) => {
        state.cat_api_status = "loading";
      },
  
      [getUsers.fulfilled]: (state, {payload: res } ) => {
        state.user = res.data;
        state.cat_api_status = "success";
        state.total = res.total;
        state.per_page = res.per_page;
        state.current_page = res.page;
        
    
      },
  
      [getUsers.rejected]: (state) => {
        state.cat_api_status = "failed";
      },
    },
  });
  
  
  
  export default userSlice.reducer;