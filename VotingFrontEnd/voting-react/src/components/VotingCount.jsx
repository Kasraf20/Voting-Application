import axios from "axios";
import React, { useEffect, useState } from "react";
import VoteProgress from "./VoteProgress";

export default function VotingCount() {
  const [vote, setVote] = useState([]);
  const getVoteCount = () => {
    axios
      .get("https://voting-application-psi.vercel.app/candidate/vote/count")
      .then((res) => setVote(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getVoteCount();
  }, []);

  const handleLiveCount = async () => {
    await getVoteCount();
    alert("Got live data successfully.");
  };

  return (
    <>
      <div className="mt-10 text-center text-gray-600 font-bold text-xl text-wrap">
        RESULTS
      </div>
      <div className="mt-5 px-5">
        <button
          className="right-3 top-[-15%] md:text-md md:p-2 sm:text-sm sm:p-1 rounded-md  text-center hover:bg-red-300 bg-red-500 text-white"
          onClick={handleLiveCount}
        >
          Live Counting
        </button>
        <div>
          {vote.map((data, id) => {
            return <VoteProgress key={id} data={data} />;
          })}
        </div>
      </div>
    </>
  );
}
