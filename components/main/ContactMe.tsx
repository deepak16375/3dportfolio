import React from "react";
import Shapes from "./Shapes";

const ContactMe = () => {
  return (
    <section className=" w-full min-h-screen flex flex-col items-center z-40 ">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Contact Me
      </h1>
      <div className="h-full w-full grid grid-cols-2 gap-4 max-sm:gap-2 a">
        <div className=" max-sm:col-span-2  ">
          <div className="text-white flex  flex-col gap-5 ">
            <form
              action=""
              className="flex items-center justify-center min-h-screen"
              
            >
              <div className="bg-transparent p-8 border overflow-hidden rounded-lg shadow-lg border-[#2A0E61] w-full max-w-md">
                <div className="mb-4">
                  <label htmlFor="name" className="text-gray-300">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-[#2A0E61] text-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="text-gray-300">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-full bg-transparent border-b border-[#2A0E61] text-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="text-gray-300">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    className="w-full bg-transparent border border-[#2A0E61] text-white"
                    
                  ></textarea>
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="px-4 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="max-sm:col-span-2">
          <Shapes />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
