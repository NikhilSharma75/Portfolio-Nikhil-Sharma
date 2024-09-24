import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="text-lg">
          Hello, I'm Nikhil Sharma, a passionate Full Stack developer with a keen eye for MERN
          Stack .  I strive to create impactful and visually stunning Software solutions
          that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-red-600 font-semibold text-2xl">
          Education & Training
        </h1>
        <br/>
        <span className="text-lg font-semibold">
          B.E(ECE),Chandigarh College of Engineering and Technology Affiliated to Punjab University, 2020-2024
          <br/>
          
        <p>  Industrial Training ,
          CS infotech (Chandigarh) , January 2024 - July 2024 , Full Stack Development
    </p>
        </span>
        <br />
        <h1 className="text-red-600 font-semibold text-2xl">
          Skills & Expertise
        </h1>
        <br/>
        <span>
            <ol className="text-lg">
                <li> Proficient in Javascript</li>
        <li>Experienced with Mern Stack Development </li>
        <li>Strong grasp of React and Nodejs</li>
         <li> Excellent problem-solving skills</li>
         <li> Effective communicator and collaborator</li>
          </ol>
        </span>
        <br />
       <hr/>
      </div>
    </div>
    
  );
}

export default About;