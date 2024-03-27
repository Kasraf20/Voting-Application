import React from "react";

export default function VoteProgress({ data }) {
  let a = 100;
  return (
    <div className="mt-5">
      <div className="mb-1 ml-2 text-lg font-medium text-[#1e3a8a]">
        {data.party.toUpperCase()}
      </div>
      <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
        {data.count >= 96 ? <div className="h-6 px-3 bg-blue-600 rounded-full dark:bg-blue-500 text-end text-white text-xl" style={{width : `96%`}}>{`${data.count} votes`}</div> : 
        <div className="h-6 px-3 bg-blue-600 rounded-full dark:bg-blue-500 text-end text-white text-xl" style={{width : `${data.count}%`}}>{`${data.count} votes`}</div>}
      </div>
    </div>
  );
}
