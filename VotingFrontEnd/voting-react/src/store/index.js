import { configureStore } from '@reduxjs/toolkit'
import userDetailSlice from './userDetailSlice'
import candidateDetailSlice from './candidateDetailSlice'
const VotingStore = configureStore({
    reducer:{
        userDetail: userDetailSlice.reducer,
        candidateDetail : candidateDetailSlice.reducer, 
    }
})

export default VotingStore