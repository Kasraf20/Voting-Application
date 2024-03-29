import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import Candidate from './Candidate';
import { candidateDetailAction } from '../store/candidateDetailSlice';

export default function FetchCandidate() {
    const candidate = useSelector(store => store.candidateDetail)
    const dispatch = useDispatch();

  const getUserData = () => {
    if(candidate.fetchDone) return
    axios
      .get(`https://voting-application-psi.vercel.app/candidate`)
      .then((result) => {
        dispatch(candidateDetailAction.addCandidateDetail(result.data))
        dispatch(candidateDetailAction.checkFetchDone())        
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserData()      
  },[])
  return (
    <Candidate/>
  )
}
