import React from "react";
import html from "/public/html.png";
import css from "/public/css.jpg";
import javascript from "/public/javascript.png";
import react from "/public/reactjs.png"
import express from "/public/express.png"
import node from "/public/node.png"
import mongodb from "/public/mongodb.jpg"
import sql from "/public/sql.png"
function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 4,
      logo: react,
      name: "React",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: express,
      name: "Express",
    },
    {
      id: 6,
      logo: node,
      name: "Nodejs",
    },
    {
      id: 7,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id:8,
      logo: sql,
      name: "SQL"
    }
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          I've 6 months  of experience in  these technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br/>
      <hr/>
    </div>
  );
}

export default Experience;