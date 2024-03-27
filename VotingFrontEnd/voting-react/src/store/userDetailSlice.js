import { createSlice } from "@reduxjs/toolkit";

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    userData: {},
    fetchDone: false,
    login: false
  },
  reducers: {
    addUserDetail: (state, action) => {
      state.userData = action.payload;
    },
    userUpdated : (state,action) => {
      state.userData = action.payload
    },
    emptyUserData : (state) => {
      state.userData = {}
    },
    checkFetchDone: (state) => {
      state.fetchDone = true;
    },
    userLogin : (state) => {
      state.login = true
    },
    userLogout : (state) => {
      state.login = false
    },
    
    addToken : (state,action) => {
      state.tokenFound = true
    },
    deleteToken : (state) => {
      state.tokenFound = false
    }
  },
});

export default userDetailSlice;
export const userDetailAction = userDetailSlice.actions;
