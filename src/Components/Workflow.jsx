import React from "react";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants/index";
import codeImg from "../assets/code.jpg";

function Workflow() {
  return (
    <div className="mt-20" id="workflow">
      <h2 className="mt-10 text-center text-3xl tracking-wide sm:text-5xl lg:mt-20 lg:text-6xl">
        accelerate{" "}
        <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 bg-clip-text text-transparent">
          your coding workflow.
        </span>
      </h2>
      <div className="mt-4 flex flex-wrap items-center justify-center">
        <div className="w-full p-2 lg:w-1/2">
          <img src={codeImg} alt="code image" />
        </div>
        <div className="w-full pt-12 lg:w-1/2">
          {checklistItems.map((item, index) => {
            return (
              <div key={index} className="mb-12 flex">
                <div className="mx-6 h-10 w-10 items-center justify-center rounded-full bg-neutral-500 p-2 text-green-400">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mb-2 mt-1 text-xl">{item.title}</h5>
                  <p className="text-md text-neutral-500 ">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Workflow;
