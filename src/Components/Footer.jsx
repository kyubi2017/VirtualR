import React from "react";
import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants/index";

function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10 ">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
        {/* col */}
        <div>
          <h3 className="text-md mb-4 font-semibold">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((item, index) => {
              return (
                <li key={index} className="">
                  <a
                    href={item.href}
                    className="text-neutral-300 transition-all hover:text-neutral-500"
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* col */}
        <div>
          <h3 className="text-md mb-4 font-semibold">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((item, index) => {
              return (
                <li key={index} className="">
                  <a
                    href={item.href}
                    className="text-neutral-300 transition-all hover:text-neutral-500"
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* col */}
        <div>
          <h3 className="text-md mb-4 font-semibold">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((item, index) => {
              return (
                <li key={index} className="">
                  <a
                    href={item.href}
                    className="text-neutral-300 transition-all hover:text-neutral-500"
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
