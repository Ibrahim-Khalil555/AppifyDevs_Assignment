import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    dateRange: "last7days",
    userType: "all",
  },
  reducers: {
    setDateRange(state, action) {
      state.dateRange = action.payload;
    },
    setUserType(state, action) {
      state.userType = action.payload;
    },
  },
});

export const { setDateRange, setUserType } = filterSlice.actions;
export default filterSlice.reducer;
