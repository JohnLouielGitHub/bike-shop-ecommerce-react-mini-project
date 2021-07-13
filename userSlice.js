import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: {
      first_name: "john",
    },
  },
  reducers: {},
});

export default userSlice.reducer;
