import { createSlice } from "@reduxjs/toolkit";

const candidateDetailSlice = createSlice({
    name : 'candidateDetail',
    initialState: {
        candidateData: [],
        fetchDone: false
    },
    reducers: {
        addCandidateDetail: (state, action) => {
            state.candidateData = action.payload;
        },
        checkFetchDone: (state) => {
            state.fetchDone = true;
        },
        candidateUpdated : (state,action) => {
            state.candidateData = action.payload
        }   
    }
})

export default candidateDetailSlice
export const candidateDetailAction = candidateDetailSlice.actions