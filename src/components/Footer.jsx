import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-black">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaGithub size={28} className="text-white"onClick=""/>
              <FaLinkedinIn size={28}  className="bg-blue-600  text-white"onClick=""/>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm text-white">
                &copy; 2024 My Portfolio . All rights reserved.
              </p>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;