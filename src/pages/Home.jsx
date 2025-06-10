import React from "react";

const Home = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center text-mocha bg-opacity-80 pt-20">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-serif mb-6 text-espresso animate-fadeInUp">
          Hello, I'm Joy Christopher
        </h1>
        <p className="text-xl italic text-[#5d4037] mb-8 animate-fadeInUp delay-200">
          Full-Stack Web Developer | Problem Solver | Code Enthusiast
        </p>
        <a
          href="/about"
          className="inline-block bg-espresso text-cream py-3 px-8 rounded-full text-lg font-semibold transition-all hover:bg-transparent hover:text-espresso border-2 border-espresso shadow-lg"
        >
          Discover My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
