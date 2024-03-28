import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

export default function Candidate() {
  const { candidateData } = useSelector((store) => store.candidateDetail);
  
  const handleVote = (e) => {
    const candidateId = e.target.value
    const token = localStorage.getItem('voting_token')
    if(!token) return alert('Please Signin.')
    axios
      .post(`http://localhost:8080/candidate/vote/${candidateId}`,candidateId,{
        headers: {"Authorization" : `Bearer ${token}`}
      }
      )
      .then((result) => {
        if(result.data.message === 'voted') alert('Already Voted.')
        else if(result.data.err) alert('Internal Server Error.')
        else alert('Vote Recorded Successfully.')  
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
    <div className="mt-10 mb-5 text-center text-gray-600 font-bold text-xl text-wrap">LOK SABHA ELECTION</div>
    <div className="relative overflow-x-auto mx-5 mb-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Party Name
            </th>
            <th scope="col" className="px-6 py-3">
              Alliance
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        {candidateData.map((candidate) => {
          return <tbody key={candidate._id}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {(candidate.candidateName).toUpperCase()}
              </th>
              <td className="px-6 py-4">{(candidate.partyName).toUpperCase()}</td>
              <td className="px-6 py-4">{(candidate.alliance).toUpperCase()}</td>
              <td className="px-6 py-4">{candidate.age}</td>
              <td className="px-6 py-4"><button className="text-white bg-green-400 px-5 py-2 text-lg rounded-full hover:bg-green-700" value={candidate._id} onClick={handleVote}>Vote</button></td>
            </tr>
          </tbody>;
        })}
      </table>
    </div>
    </>
  );
}
