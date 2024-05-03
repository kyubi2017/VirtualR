import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function Hero() {
  return (
    <div className="flex flex-col items-center " id="home">
      <h1 className="text-center text-4xl tracking-wide sm:text-6xl lg:text-7xl">
        VirtualR build for tools{" "}
        <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 bg-clip-text text-transparent">
          for developers
        </span>
      </h1>
      <p className="mt-10 max-w-4xl text-center text-lg text-neutral-500 ">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="my-10 flex justify-center">
        <a
          href="#"
          className="mx-3 rounded-md bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 px-4 py-3 transition-all hover:-translate-y-2 "
        >
          Start for free
        </a>
        <a
          href="#"
          className="mx-3 rounded-md border px-4 py-3 transition-all hover:-translate-y-2"
        >
          documentation
        </a>
      </div>
      <div className="mt-10 flex justify-center">
        <video
          autoPlay
          muted
          loop
          className="mx-2 my-4 w-1/2 rounded-lg border border-orange-700 shadow-orange-600"
        >
          <source src={video1} />
        </video>
        <video
          autoPlay
          muted
          loop
          className="mx-2 my-4 w-1/2 rounded-lg border border-orange-700 shadow-orange-600"
        >
          <source src={video2} type="video/mp4" />
          Your browser dose not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Hero;
