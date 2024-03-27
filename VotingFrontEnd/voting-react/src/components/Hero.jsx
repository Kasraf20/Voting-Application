import React from "react";

export default function Hero() {
  return (
    <>
      <div className="mt-10 text-center text-gray-600 font-bold text-xl text-wrap">
        ABOUT ME
      </div>
      <div
        id="container"
        className="bg-black mt-5 p-10 w-auto flex justify-center relative"
      >
        <div
          id="container"
          className="w-auto flex flex-col justify-center items-center"
        >
          <div className="m-10">
            <img
              className="rounded-full w-auto h-[150px]"
              src="/image/me.png"
              alt="image of myself"
            />
          </div>
          <div className="max-w-sm">
            <h1 className="text-white font-bold text-3xl mt-3 mb-8">
              MERN STACK DEVELOPER!
            </h1>

            <p className="text-white mb-10">
              I am a passionate MERN stack developer with 1 years of experience
              in building dynamic and responsive web applications. I thrive on
              challenges and am always eager to adopt new technologies to solve
              complex problems. My goal is to create impactful web solutions
              that are not only efficient and scalable but also offer engaging
              user experiences.
            </p>

            <div
              id="social"
              className="flex flex-wrap justify-start items-center gap-4"
            >
              <a
                rel="noopener"
                target="_blank"
                href="https://github.com/kasraf20"
                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              >
                <img
                  className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                  src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                  width="20px"
                  height="20px"
                  alt="Github"
                />
                <span>Visit my Github</span>
              </a>
              <a
                rel="noopener"
                target="_blank"
                href="https://www.linkedin.com/in/asraf-2102/"
                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              >
                <img
                  className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                  src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                  width="20px"
                  height="20px"
                  alt="LinkedIn"
                />
                <span>Follow me on Linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
