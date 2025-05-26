import React from "react";
import flower from "../assets/flower.png";
export const Project = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl md:text-5xl lg:6xl mt-8">My Projects</h1>
        <div className="flex flex-col md:flex-row  justify-between gap-10 mt-8 text-center ml-3 mr-3 mb-2">
          <div className="bg-amber-50 rounded-4xl w-95 md:w-[32%]  shadow-amber-600 shadow bg-opacity-80 md:ml-10 md:mr-10">
            <div className="font-bold mt-2">iNotebook</div>
            <div className="text-sm mb-2">Cloud-Based Note-Taking App</div>
            <div className="p-2 pl-3 pr-3" >
              A secure and responsive cloud-based note-taking web app where
              users can sign up, log in, and create, update, or delete notes
              from anywhere.
            </div>
            <div>
              {" "}
              <span className="font-semibold">Tech Stack:</span> React, Node.js,
              Express, MongoDB
            </div>
            <div className="mb-2">
              {" "}
              <span className="font-semibold">GitHub:</span> [Link]
            </div>
          </div>
          <div className="bg-amber-50 rounded-4xl w-95  shadow-amber-600 shadow bg-opacity-80  md:w-[32%] ">
            <div className="font-bold mt-2">NewsMonkey</div>
            <div className="text-sm mb-2">Live News App
</div>
            <div className="p-2 pl-3 pr-3">
A news aggregator app that fetches real-time headlines based on categories like business, technology, and sports using the News API.
            </div>
            <div>
              {" "}
              <span className="font-semibold">Tech Stack:</span> React, Node.js,
              Express, MongoDB
            </div>
            <div className="mb-2">
              {" "}
              <span className="font-semibold">GitHub:</span> [Link]
            </div>
          </div>

 <div className="bg-amber-50 rounded-4xl w-95  shadow-amber-600 shadow bg-opacity-80  md:w-[32%]  md:ml-10 md:mr-10 ">
            <div className="font-bold mt-2">Portfolio </div>
            <div className="text-sm mb-2">Personal Developer Website</div>
            <div className="p-2 pl-3 pr-3">
A personal portfolio website showcasing projects, skills, and contact details with a clean, responsive design.
            </div>
            <div>
              {" "}
              <span className="font-semibold">Tech Stack:</span> React
            </div>
            <div className="mb-2">
              {" "}
              <span className="font-semibold">GitHub:</span> [Link]
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
