import React from "react";
import Bookstore from "/public/Bookstore.png"
import Chatterboxlogo from "/public/Chatterbox logo.png"

function PortFolio() {
    const cardItem = [
      {
        id: 1,
        logo: Chatterboxlogo, 
        name: "Real Time Chat Application(Chatterbox)",
        view: "https://real-time-chat-app-5yys.onrender.com",
        SourceCode: "https://github.com/NikhilSharma75/mern-real-time-chat-app"
      },
      {
        id: 2,
        logo: Bookstore, 
        name: "BookStore Application",
        view: "https://bookstore-app-sono.onrender.com",
        SourceCode: "https://github.com/NikhilSharma75/BookStoreApp"
      }
    ];
  
    const handleViewClick = (url) => {
      window.location.href = url; // Redirect to the provided URL
    };
  
    const handleSourceCodeClick = (url) => {
      window.location.href = url; // Redirect to the provided URL
    };
  
    return (
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
          <span className="underline text-xl font-semibold">Featured Projects</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
            {cardItem.map(({ id, logo, name, view, SourceCode }) => (
              <div
                className="md:w-[330px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[320px] h-[170px] p-1 rounded-md border-[2px]"
                  alt=""
                />
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700">
                    MERN stack application
                  </p>
                </div>
                <div className=" px-6 py-4 space-x-3 justify-around">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                    onClick={() => handleViewClick(view)}
                  >
                    View
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                    onClick={() => handleSourceCodeClick(SourceCode)}
                  >
                    Source Code
                  </button>
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

export default PortFolio;