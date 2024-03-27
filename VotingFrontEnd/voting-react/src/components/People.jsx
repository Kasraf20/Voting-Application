import React from 'react'
import voterImage from "/image/bg-voting.jpg";

export default function People() {
  return (
    <div
      className="w-[100vw] h-[100vh] flex justify-center items-center"
      style={{
        backgroundImage: `url(${voterImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
    </div>
  )
}
