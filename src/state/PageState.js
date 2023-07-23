import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

const updatePagesState = createSlice({
  name: "updatePagesState",
  initialState: initialState,
  reducers: {
    updatePageToSpecificNumber: (state, action) => {
      if (action.payload > 0) {
        state.page = action.payload;
      }
    },

    updatePageToNext: (state) => {
      if (state.page < 4) {
        state.page += 1;
      }
    },

    updatePageToPrevious: (state) => {
      if (state.page > 0) {
        state.page -= 1;
      }
    },
  },
});

export const updatePageStateActions = updatePagesState.actions;
export default updatePagesState.reducer;
