import React from "react";
import { testimonials } from "../constants/index";

function Testimonial() {
  return (
    <div className="mt-20 tracking-wide" id="testimonial">
      <h2 className="my-10 text-center text-3xl sm:text-5xl lg:my-20 lg:text-6xl">
        What people{" "}
        <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 bg-clip-text text-transparent">
          are saying
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((item, index) => {
          return (
            <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/3">
              <div className="text-md rounded-md border border-neutral-500 bg-neutral-900 p-6 font-thin ">
                <p>{item.text}</p>
                <div className="mt-8 flex items-center">
                  <img
                    className="mr-6 h-12 w-12 rounded-full border border-neutral-300"
                    src={item.img}
                    alt={item.user}
                  />
                  <div>
                    <h6>{item.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-600">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;
