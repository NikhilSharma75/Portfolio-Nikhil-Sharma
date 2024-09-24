

import React from "react";

import image from "../../public/image.jpeg"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
function downloadResume() {
  const resumeLink = "public\resume.pdf"; // Replace with the actual path to your resume
  const a = document.createElement('a');
  a.href = resumeLink;
  a.download = 'Resume_Nikhil Sharma.pdf'; // Set the desired filename for the downloaded file
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 "
      >
        
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 mt-10 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-2xl">Welcome To My Portfolio</span>
            <div className="flex space-x-1 text-3xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-lg text-justify">
            Enthusiastic Full-Stack Developer with a strong foundation in both front-end and back-end development. 
            Eager to contribute to a dynamic development environment and continuously learn new technologies.
             Proficient in database queries and adaptable to various database technologies.
             Experienced in building responsive and interactive web applications.
            </p>
            <br/>
            <div>
  <button className="rounded-lg text-white bg-gray-900 hover:bg-red-600 transition-all 
  duration-200 px-4 py-2 font-semibold" onClick={downloadResume}>Download Resume</button>
</div>
            <br />
            <br/>
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold  text-lg text-center ">Available on</h1>
                <ul className="flex space-x-5">
                 
                  <li>
                    <a href="www.linkedin.com/in/nikhil-sharma-34wdkdf" target="_blank">
                      <FaLinkedin className="text-4xl text-blue-500 cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/NikhilSharma75" target="_blank">
                      <FaGithub className="text-4xl  cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-lg text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl text-green-500 md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl text-bold md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-4xl text-blue-500 hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-4xl  text-yellow-500 hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={image}
              className="rounded-md md:w-[360px] md:h-[450px] hover:scale-130"
              alt="formal"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;