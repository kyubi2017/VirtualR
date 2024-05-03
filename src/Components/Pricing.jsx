import React from "react";
import { CheckCircle2 } from "lucide-react";
import { features, pricingOptions } from "../constants/index";
import { space } from "postcss/lib/list";

function Pricing() {
  return (
    <div className="mt-20" id="pricing">
      <h2 className="my-8 text-center text-3xl tracking-wider sm:text-5xl lg:text-6xl">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((item, index) => {
          return (
            <div key={index} className="w-full p-2 sm:w-1/2 lg:w-1/3">
              <div className="rounded-xl border border-neutral-700 p-10">
                <p className="mb-8 text-4xl ">
                  {item.title}
                  {item.title === "Pro" && (
                    <span className="mb-4 ml-2 bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-xl text-transparent">
                      (Most Popular)
                    </span>
                  )}
                </p>
                <p className="mb-8">
                  <span className="mr-2 mt-6 text-5xl">{item.price}</span>
                  <span className="tracking-tight text-neutral-400">
                    /Month
                  </span>
                </p>
                <ul>
                  {item.features.map((feature, index) => {
                    return (
                      <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2 />
                        <span className="ml-2">{feature}</span>
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="#"
                  className="mt-20 inline-flex h-12 w-full items-center justify-center rounded-lg border border-orange-900 p-5 text-center text-xl tracking-tight transition-all hover:bg-orange-700 duration-200"
                >
                  Subscribe
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
