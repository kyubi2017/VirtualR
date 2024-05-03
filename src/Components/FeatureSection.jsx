import React from "react";
import { features } from "../constants/index";

function FeatureSection() {
  return (
    <div className="relative mt-20 min-h-[800px] border-b border-neutral-500 " id="features">
      <div className="text-center">
        <span className="h-6 rounded-full bg-neutral-900 px-2 py-1  font-medium uppercase text-orange-500">
          feature
        </span>
        <h2 className="mt-10 text-3xl tracking-wide sm:text-5xl lg:mt-20 lg:text-6xl">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 bg-clip-text text-transparent">
            your code
          </span>
        </h2>
      </div>
      <div className="mt-10 flex flex-wrap lg:mt-20">
        {features.map((item, index) => {
          return (
            <div key={index} className="w-fll sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="mx-6 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 p-2 text-orange-700">
                  {item.icon}
                </div>
                <div>
                  <h5 className="mb-3 mt-1 text-xl">{item.text}</h5>
                  <p className="text-md mb-10 p-2 text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureSection;
