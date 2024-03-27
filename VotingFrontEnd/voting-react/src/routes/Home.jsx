import React from "react";
import People from "../components/People";
import FetchCandidate from "../components/FetchCandidate";
import Hero from "../components/Hero";
import VotingCount from "../components/VotingCount";

export default function Home() {
  return (
    <>
      <People/>
      <FetchCandidate/> 
      <Hero/>
      <VotingCount/>
    </>
  );
}
